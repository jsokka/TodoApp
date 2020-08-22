using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using GraphQL.Validation.Complexity;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TodoApp.Api.GraphQL;
using TodoApp.Data;
using TodoApp.Data.DependencyInjection;
using TodoApp.Data.Models;

namespace TodoApp.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            Configuration = configuration;
            HostEnvironment = env;
        }

        public IConfiguration Configuration { get; }
        public IWebHostEnvironment HostEnvironment { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);

            services.AddDbContext<TodoAppContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("TodoApp"));
            }, contextLifetime: ServiceLifetime.Transient, optionsLifetime: ServiceLifetime.Transient);

            services.AddRepositoryFactory<IRepository<Project>, EntityRepository<TodoAppContext, Project>>();
            services.AddRepositoryFactory<IRepository<Task>, EntityRepository<TodoAppContext, Task>>();
            services.AddRepositoryFactory<IRepository<Tag>, EntityRepository<TodoAppContext, Tag>>();

            services.AddSingleton<TodoAppSchema>();

            services.AddGraphQL(x =>
            {
                x.ExposeExceptions = HostEnvironment.IsDevelopment();
                x.EnableMetrics = false;
                x.ComplexityConfiguration = new ComplexityConfiguration { MaxDepth = 15 };
            })
            .AddGraphTypes(ServiceLifetime.Singleton)
            .AddSystemTextJson()
            .AddDataLoader();

            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseCors(options => options.AllowAnyOrigin()
                .AllowAnyMethod().AllowAnyHeader());

            app.UseGraphQL<TodoAppSchema>();
            app.UseGraphQLPlayground(new GraphQLPlaygroundOptions() { Path = new PathString("") });
        }
    }
}
