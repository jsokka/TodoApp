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
    }
}
