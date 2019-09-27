using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TodoApp.Data.Models;

namespace TodoApp.Data.Repositories
{
    public interface ITaskRepository : IRepository<Models.Task>
    {
        Task<IEnumerable<Models.Task>> GetTasksByPriority(TaskPriority priority);
        Task<IEnumerable<Models.Task>> GetTasksByProjectIdAsync(Guid projectId);
        Task<bool> TaskHasTagAsync(Guid taskId, Guid tagId);
        Task<bool> AddTagForTask(Guid taskId, Guid tagId);
        Task<Models.Task> ToggleTaskCompleted(Guid taskId, bool complted);
    }
}
