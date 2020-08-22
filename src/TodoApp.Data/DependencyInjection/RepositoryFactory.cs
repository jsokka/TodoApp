using Microsoft.Extensions.DependencyInjection;
using System;
using TodoApp.Data.Models;

namespace TodoApp.Data.DependencyInjection
{
    public class RepositoryFactory : IRepositoryFactory
    {
        readonly IServiceProvider sp;

        public RepositoryFactory(IServiceProvider sp)
        {
            this.sp = sp;
        }

        public IRepository<T> Create<T>() where T : BaseEntity
        {
            return sp.CreateScope().ServiceProvider.GetRequiredService<IRepository<T>>();
        }
    }
}
