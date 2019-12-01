using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Data.Models;

namespace TodoApp.Data.Repositories
{
    public interface ITaskRepository : IRepository<Models.Task>
    {
        Task<IEnumerable<Models.Task>> GetTasksByPriorityAsync(TaskPriority priority);
        Task<IEnumerable<Models.Task>> GetTasksByProjectIdAsync(Guid? projectId);
        Task<ILookup<Guid, Models.Task>> GetTasksByProjectIdsAsync(IEnumerable<Guid> projectIds, TaskPriority? priority = null, bool openOnly = false);
        Task<bool> TaskHasTagAsync(Guid taskId, Guid tagId);
        Task<bool> AddTagForTask(Guid taskId, Guid tagId);
        Task<Models.Task> ToggleTaskCompleted(Guid taskId, bool complted);
        Task<IEnumerable<Models.Task>> SearchTasksAsync(string searchString);
    }
}
