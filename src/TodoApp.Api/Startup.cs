using GraphQL;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TodoApp.Api.GraphQL;
using TodoApp.Data;
using TodoApp.Data.DependencyInjection;
using TodoApp.Data.Repositories;

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

            services.Configure<IISServerOptions>(opt => { opt.AllowSynchronousIO = true; });
            services.Configure<KestrelServerOptions>(opt => { opt.AllowSynchronousIO = true; });

            services.AddDbContext<TodoAppContext>(options => 
            {
                options.UseSqlServer(Configuration.GetConnectionString("TodoApp"));
            }, contextLifetime: ServiceLifetime.Transient, optionsLifetime: ServiceLifetime.Transient);

            services.AddRepositoryFactory<IProjectRepository, ProjectRepository>();
            services.AddRepositoryFactory<ITaskRepository, TaskRepository>();
            services.AddRepositoryFactory<ITagRepository, TagRepository>();

            services.AddSingleton<IDependencyResolver>(s =>
                new FuncDependencyResolver(s.GetRequiredService));

            services.AddSingleton<TodoAppSchema>();

            services.AddGraphQL(x =>
            {
                x.ExposeExceptions = HostEnvironment.IsDevelopment();
            })
            .AddGraphTypes(ServiceLifetime.Singleton)
            .AddDataLoader();
            //.AddUserContextBuilder(httpContext => httpContext.User)
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

            app.UseGraphQL<TodoAppSchema>();
            app.UseGraphQLPlayground(new GraphQLPlaygroundOptions() { Path = new PathString("") });

            //app.UseMvc(routes =>
            //{
            //    routes.MapRoute(
            //        name: "default",
            //        template: "{controller}/{action=Index}/{id?}");
            //});
        }
    }
}
