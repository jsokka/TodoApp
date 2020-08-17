using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Data.Models;

namespace TodoApp.Data.QueryExtensions
{
    public static class ProjectRepositoryExtensions
    {
        public static async Task<Dictionary<Guid, Project>> GetProjectsByIdsAsync(this IRepository<Project> repository, IEnumerable<Guid> ids)
        {
            return await repository.DbSet.Where(p => ids.Contains(p.Id)).ToDictionaryAsync(p => p.Id);
        }

        public static async Task<IEnumerable<Project>> SearchProjects(this IRepository<Project> repository, string searchString)
        {
            return await repository.DbSet
                .Where(p => p.Name.Contains(searchString) || p.Description.Contains(searchString))
                .ToListAsync();
        }

        public static async Task<Dictionary<Guid, int>> GetTaskCountByProjects(this IRepository<Project> repository,
            IEnumerable<Guid> projectIds, bool uncompletedOnly = false)
        {
            return await repository.DbSet.Where(p => projectIds.Contains(p.Id))
                .Select(p => new
                {
                    p.Id,
                    TaskCount = p.Tasks.Count(t => !uncompletedOnly || !t.CompletedOn.HasValue)
                }).ToDictionaryAsync(p => p.Id, p => p.TaskCount);
        }

        public static async Task<Project> GetProjectByTaskId(this IRepository<Project> repository, Guid taskId)
        {
            return await repository.DbSet.Where(t => t.Tasks.Any(t => t.Id == taskId)).FirstOrDefaultAsync();
        }
    }
}
