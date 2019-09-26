using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using TodoApp.Data.Repositories;

namespace TodoApp.Api
{
    public class ContextServiceLocator
    {
        // https://github.com/graphql-dotnet/graphql-dotnet/issues/648#issuecomment-431489339

        public IProjectRepository ProjectRepository =>
            _httpContextAccessor.HttpContext.RequestServices.GetRequiredService<IProjectRepository>();

        public ITaskRepository TaskRepository =>
            _httpContextAccessor.HttpContext.RequestServices.GetRequiredService<ITaskRepository>();

        public ITagRepository TagRepository =>
            _httpContextAccessor.HttpContext.RequestServices.GetRequiredService<ITagRepository>();

        private readonly IHttpContextAccessor _httpContextAccessor;

        public ContextServiceLocator(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }
        
    }
}
