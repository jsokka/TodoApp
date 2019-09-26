using GraphQL;
using GraphQL.Server;
using GraphQL.Server.Ui.Playground;
using TodoApp.Api.GraphQL;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TodoApp.Data;
using Microsoft.EntityFrameworkCore;
using TodoApp.Data.Repositories;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.Extensions.Hosting;

namespace TodoApp.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);

            services.Configure<IISServerOptions>(opt => { opt.AllowSynchronousIO = true; });
            services.Configure<KestrelServerOptions>(opt => { opt.AllowSynchronousIO = true; });

            services.AddDbContext<TodoAppContext>(options => 
                options.UseSqlServer(Configuration.GetConnectionString("TodoApp")), ServiceLifetime.Transient);

            services.AddTransient<IProjectRepository, ProjectRepository>();
            services.AddTransient<ITaskRepository, TaskRepository>();
            services.AddTransient<ITagRepository, TagRepository>();

            services.AddHttpContextAccessor();
            services.AddSingleton<ContextServiceLocator>();
            services.AddSingleton<IDependencyResolver>(s =>
                new FuncDependencyResolver(s.GetRequiredService));

            services.AddSingleton<TodoAppSchema>();

            services.AddGraphQL(x =>
            {
                x.ExposeExceptions = true;
            })
            .AddGraphTypes(ServiceLifetime.Singleton);
            //.AddUserContextBuilder(httpContext => httpContext.User)
            //.AddDataLoader();
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
