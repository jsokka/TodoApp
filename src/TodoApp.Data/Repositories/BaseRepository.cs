using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApp.Data.Repositories
{
    public interface IRepository<TEntity> where TEntity : Models.BaseEntity
    {
        Task<TEntity> FindAsync(Guid id);
        Task<IEnumerable<TEntity>> GetAllAsync();
        Task<TEntity> AddAsync(TEntity entity);
        Task<TEntity> UpdateAsync(Guid id, TEntity entity);
        Task DeleteAsync(TEntity entity);
        Task DeleteAsync(IEnumerable<TEntity> entities);
        Task DeleteAsync(Guid id);
        Task DeleteAsync(IEnumerable<Guid> ids);
    }

    public abstract class BaseRepository<TEntity> : IRepository<TEntity> where TEntity : Models.BaseEntity
    {
        readonly DbSet<TEntity> dbSet;

        protected readonly TodoAppContext Db;

        protected BaseRepository(TodoAppContext db)
        {
            Db = db;
            dbSet = db.Set<TEntity>();
        }

        public virtual async Task<TEntity> FindAsync(Guid id)
        {
            return await dbSet.FindAsync(id);
        }

        public virtual async Task<IEnumerable<TEntity>> FindAsync(IEnumerable<Guid> ids)
        {
            var guids = ids.ToList();

            return await dbSet.Where(e => guids.Contains(e.Id)).ToListAsync();
        }

        public virtual async Task<IEnumerable<TEntity>> GetAllAsync()
        {
            return await dbSet.ToListAsync();
        }

        public virtual async Task<TEntity> AddAsync(TEntity entity)
        {
            await dbSet.AddAsync(entity);
            await Db.SaveChangesAsync();

            return entity;
        }

        public virtual async Task DeleteAsync(TEntity entity)
        {
            await DeleteAsync(new[] { entity });
        }

        public virtual async Task DeleteAsync(IEnumerable<TEntity> entities)
        {
            foreach (var entity in entities)
            {
                if (Db.Entry(entity).State == EntityState.Detached)
                    dbSet.Attach(entity);

                dbSet.Remove(entity);
            }

            await Db.SaveChangesAsync();
        }

        public virtual async Task DeleteAsync(Guid id)
        {
            var entity = await FindAsync(id);

            if (entity == null)
            {
                throw new InvalidOperationException($"Entity of type {typeof(TEntity).Name} " +
                    $"with id '{id}' cannot be found");
            }

            await DeleteAsync(new[] { entity });
        }

        public virtual async Task DeleteAsync(IEnumerable<Guid> ids)
        {
            var guids = ids.ToList();

            var entities = await FindAsync(guids);

            var missing = guids.Where(id => !entities.Select(e => e.Id).Contains(id)).ToList();

            if (missing.Any())
            {
                throw new InvalidOperationException($"Entity of type {typeof(TEntity).Name} " +
                    $"with id(s) {string.Join(", ", missing)} cannot be found");
            }

            await DeleteAsync(entities);
        }

        public virtual async Task<TEntity> UpdateAsync(Guid id, TEntity entity)
        {
            var dbEntity = dbSet.Find(id);

            if (dbEntity == null)
                throw new InvalidOperationException($"{entity} cannot be found with id {id}");

            entity.Id = id;

            Db.Entry(dbEntity).CurrentValues.SetValues(entity);

            await Db.SaveChangesAsync();

            return dbEntity;
        }
    }
}
