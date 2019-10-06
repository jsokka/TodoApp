using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TodoApp.Data.Models;

namespace TodoApp.Data.Repositories
{
    public interface IProjectRepository : IRepository<Project>
    {
        Task<Dictionary<Guid, Project>> GetProjectsByIdsAsync(IEnumerable<Guid> ids);
        Task<IEnumerable<Project>> SearchProjects(string searchString);
    }
}
