using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TodoApp.Data
{
    public interface IRepository<TEntity> where TEntity : Models.BaseEntity
    {
        DbSet<TEntity> DbSet { get; }
        Task<TEntity> FindAsync(Guid id);
        Task<IEnumerable<TEntity>> GetAllAsync();
        Task<TEntity> AddAsync(TEntity entity);
        Task<TEntity> UpdateAsync(Guid id, TEntity entity);
        Task DeleteAsync(TEntity entity);
        Task DeleteAsync(IEnumerable<TEntity> entities);
        Task DeleteAsync(Guid id);
        Task DeleteAsync(IEnumerable<Guid> ids);
    }
}
