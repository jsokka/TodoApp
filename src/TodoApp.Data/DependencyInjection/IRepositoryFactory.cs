using TodoApp.Data.Models;

namespace TodoApp.Data.DependencyInjection
{
    public interface IRepositoryFactory
    {
        IRepository<T> Create<T>() where T : BaseEntity;
    }
}
