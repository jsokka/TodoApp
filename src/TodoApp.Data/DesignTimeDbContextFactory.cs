using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Reflection;

namespace TodoApp.Data
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<TodoAppContext>
    {
        public TodoAppContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<TodoAppContext>();
            builder.UseSqlServer(GetConnectionString(),
                optionsBuilder => optionsBuilder.MigrationsAssembly(typeof(TodoAppContext).GetTypeInfo().Assembly.GetName().Name));

            return new TodoAppContext(builder.Options);
        }
        
        string GetConnectionString()
        {
            var environmentName = Environment
                .GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

            var basePath = AppContext.BaseDirectory;

            var config = new ConfigurationBuilder()
               .SetBasePath(basePath)
               .AddJsonFile("appsettings.json")
               .AddJsonFile($"appsettings.{environmentName}.json", true)
               .AddEnvironmentVariables()
               .Build();

            return config.GetConnectionString("TodoApp");
        }
    }
}
