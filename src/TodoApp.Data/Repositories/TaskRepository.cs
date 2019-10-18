using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Data.Models;

namespace TodoApp.Data.Repositories
{
    public class TaskRepository : BaseRepository<Models.Task>, ITaskRepository
    {
        public TaskRepository(TodoAppContext db) : base(db) { }

        public async Task<IEnumerable<Models.Task>> GetTasksByPriority(TaskPriority priority)
        {
            return await Db.Tasks.Where(t => t.Priority == priority).ToListAsync();
        }

        public async Task<IEnumerable<Models.Task>> GetTasksByProjectIdAsync(Guid projectId)
        {
            return await Db.Tasks.Where(t => t.ProjectId == projectId).ToListAsync();
        }

        public async Task<ILookup<Guid, Models.Task>> GetTasksByProjectIdsAsync(IEnumerable<Guid> projectIds, 
            TaskPriority? priority = null, bool openOnly = false)
        {
            var q = Db.Tasks.Where(t => projectIds.Contains(t.ProjectId.Value));

            if (openOnly)
            {
                q = q.Where(t => !t.CompletedOn.HasValue);
            }

            if (priority.HasValue)
            {
                q = q.Where(t => t.Priority == priority);
            }

            return (await q.ToListAsync()).ToLookup(t => t.ProjectId.Value);
        }

        public async Task<bool> TaskHasTagAsync(Guid taskId, Guid tagId)
        {
            return await Db.Tasks.Where(t => t.Id == taskId)
                .AnyAsync(t => t.TaskTags.Any(tag => tag.TagId == tagId));
        }

        public async Task<Models.Task> ToggleTaskCompleted(Guid taskId, bool completed)
        {
            var task = await FindAsync(taskId);

            if (task.CompletedOn.HasValue == completed)
            {
                return task;
            }

            task.CompletedOn = completed ? DateTime.Now : (DateTime?)null;

            await Db.SaveChangesAsync();

            return task;
        }

        public async Task<bool> AddTagForTask(Guid taskId, Guid tagId)
        {
            var task = await FindAsync(taskId);

            if (task == null)
            {
                throw new InvalidOperationException($"Task with '{taskId} not found'");
            }

            if (!(await Db.Tags.AnyAsync(t => t.Id == tagId)))
            {
                throw new InvalidOperationException($"Tag with '{tagId}' not found");
            }

            if (await TaskHasTagAsync(taskId, tagId))
            {
                throw new InvalidOperationException($"Task '{taskId}' already has tag '{tagId}'");
            }

            if (task.TaskTags == null)
            {
                task.TaskTags = new List<TaskTag>();
            }

            task.TaskTags.Add(new TaskTag { TagId = tagId });

            return (await Db.SaveChangesAsync()) == 1;
        }

        public async Task<IEnumerable<Models.Task>> SearchTasksAsync(string searchString)
        {
            return await Db.Tasks
                .Where(t => t.Title.Contains(searchString) || t.Description.Contains(searchString))
                .ToListAsync();
        }
    }
}
