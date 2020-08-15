using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Data.Models;
using TodoApp.Data.Repositories;

namespace TodoApp.Data.QueryExtensions
{
    public static class TagRepositoryExtensions
    {
        public static async Task<Tag> GetTagByName(this IRepository<Tag> repository, string name)
        {
            return await repository.DbSet.SingleOrDefaultAsync(t => t.Name == name);
        }

        public static Task<Tag> AddAsync(this IRepository<Tag> repository, Tag entity)
        {
            if (string.IsNullOrEmpty(entity?.Name))
            {
                throw new ArgumentNullException("entity.Name");
            }

            return AddTagAsync(repository, entity);
        }

        async static Task<Tag> AddTagAsync(IRepository<Tag> repository, Tag tag)
        {
            if (await repository.DbSet.AnyAsync(t => t.Name == tag.Name))
            {
                throw new InvalidOperationException($"Tag named {tag.Name} already exists");
            }

            return await repository.AddAsync(tag);
        }

        public static async Task<IEnumerable<Tag>> GetTagsByTaskIdAsync(IRepository<Tag> repository, Guid taskId)
        {
            return await repository.DbSet.Where(t => t.TaskTags.Any(tt => tt.TaskId == taskId)).ToListAsync();
        }

        public static async Task<ILookup<Guid, Tag>> GetTagsByTaskIdsAsync(this IRepository<Tag> repository, IEnumerable<Guid> taskIds)
        {
            var tasks = await repository.DbSet.Where(t => t.TaskTags.Any(tt => taskIds.Contains(tt.TaskId)))
                .SelectMany(t => t.TaskTags.Select(tt => new { tt.TaskId, tt.Tag }))
                .ToListAsync();

            return tasks.ToLookup(x => x.TaskId, x => x.Tag);
        }
    }
}
