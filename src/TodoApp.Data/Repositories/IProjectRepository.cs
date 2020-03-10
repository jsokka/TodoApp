using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TodoApp.Data.Models;

namespace TodoApp.Data.Repositories
{
    public interface IProjectRepository : IRepository<Project>
    {
        Task<Dictionary<Guid, Project>> GetProjectsByIdsAsync(IEnumerable<Guid> ids);
        Task<IEnumerable<Project>> SearchProjects(string searchString);
        Task<Dictionary<Guid, int>> GetTaskCountByProjects(IEnumerable<Guid> projectIds, bool uncompletedOnly = false);
        Task<Project> GetProjectByTaskId(Guid taskId);
    }
}
