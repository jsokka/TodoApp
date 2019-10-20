using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using TodoApp.Data.Models;

namespace TodoApp.Data.Repositories
{
    public class ProjectRepository : BaseRepository<Project>, IProjectRepository
    {
        public ProjectRepository(TodoAppContext db) : base(db) { }

        public async Task<Dictionary<Guid, Project>> GetProjectsByIdsAsync(IEnumerable<Guid> ids)
        {
            return await Db.Projects.Where(p => ids.Contains(p.Id)).ToDictionaryAsync(p => p.Id);
        }

        public async Task<IEnumerable<Project>> SearchProjects(string searchString)
        {
            return await Db.Projects
                .Where(p => p.Name.Contains(searchString) || p.Description.Contains(searchString))
                .ToListAsync();
        }

        public async Task<Dictionary<Guid, int>> GetTaskCountByProjects(IEnumerable<Guid> ids, bool uncompletedOnly = false)
        {
            return await Db.Projects.Where(p => ids.Contains(p.Id))
                .Select(p => new 
                { 
                    p.Id, 
                    TaskCount = p.Tasks.Where(t => !uncompletedOnly || !t.CompletedOn.HasValue).Count() 
                }).ToDictionaryAsync(p => p.Id, p => p.TaskCount);
        }

        public async Task<Project> GetProjectByTaskId(Guid taskId)
        {
            return await Db.Projects.Where(t => t.Tasks.Any(t => t.Id == taskId)).FirstOrDefaultAsync();
        }
    }
}
