using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Data.Models;

namespace TodoApp.Data.QueryExtensions
{
    public static class TaskRepositoryExtensions
    {
        public static async Task<IEnumerable<Models.Task>> GetTasksByPriorityAsync(this IRepository<Models.Task> repository, TaskPriority priority)
        {
            return await repository.DbSet.Where(t => t.Priority == priority).ToListAsync();
        }

        public static async Task<IEnumerable<Models.Task>> GetTasksByProjectIdAsync(this IRepository<Models.Task> repository, Guid? projectId)
        {
            return await repository.DbSet.Where(t => t.ProjectId == projectId).ToListAsync();
        }

        public static async Task<ILookup<Guid, Models.Task>> GetTasksByProjectIdsAsync(this IRepository<Models.Task> repository, IEnumerable<Guid> projectIds,
            TaskPriority? priority = null, bool openOnly = false)
        {
            var q = repository.DbSet.Where(t => projectIds.Contains(t.ProjectId.Value));

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

        public static async Task<bool> TaskHasTagAsync(this IRepository<Models.Task> repository, Guid taskId, Guid tagId)
        {
            return await repository.DbSet.Where(t => t.Id == taskId)
                .AnyAsync(t => t.TaskTags.Any(tag => tag.TagId == tagId));
        }

        public static async Task<Models.Task> ToggleTaskCompleted(this IRepository<Models.Task> repository, Guid taskId, bool completed)
        {
            var task = await repository.FindAsync(taskId);

            if (task.CompletedOn.HasValue == completed)
            {
                return task;
            }

            task.CompletedOn = completed ? DateTime.Now : (DateTime?)null;

            await repository.UpdateAsync(taskId, task);

            return task;
        }

        public static async Task<bool> AddTagForTask(this IRepository<Models.Task> repository, Guid taskId, Guid tagId)
        {
            var task = await repository.FindAsync(taskId);

            if (task == null)
            {
                throw new InvalidOperationException($"Task with '{taskId} not found'");
            }

            if (task.TaskTags == null)
            {
                task.TaskTags = new List<TaskTag>();
            }

            task.TaskTags.Add(new TaskTag { TagId = tagId });

            await repository.UpdateAsync(taskId, task);

            return true;
        }

        public static async Task<IEnumerable<Models.Task>> SearchTasksAsync(this IRepository<Models.Task> repository, string searchString)
        {
            return await repository.DbSet
                .Where(t => t.Title.Contains(searchString) || t.Description.Contains(searchString))
                .ToListAsync();
        }
    }
}
