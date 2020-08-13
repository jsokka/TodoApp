using GraphQL;
using GraphQL.Types;
using System;
using TodoApp.Api.GraphQL.GraphTypes.InputTypes;
using TodoApp.Api.GraphQL.GraphTypes.ObjectTypes;
using TodoApp.Api.Models;
using TodoApp.Data.DependencyInjection;
using TodoApp.Data.Models;
using TodoApp.Data.QueryExtensions;
using TodoApp.Data.Repositories;

namespace TodoApp.Api.GraphQL
{
    public partial class TodoAppMutation
    {
        partial void AddTaskFields(
            IFactory<IRepository<Task>> taskRepositoryFactory,
            IFactory<IRepository<Project>> projectRepositoryFactory)
        {
            FieldAsync<TaskType>(
                "addTask",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<TaskInputType>> { Name = "taskInput" }
                ),
                resolve: async context =>
                {
                    var task = context.GetArgument<Data.Models.Task>("taskInput");

                    return await taskRepositoryFactory.Create().AddAsync(task);
                }
            );

            FieldAsync<TaskDeletePayloadType>(
                "deleteTask",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "id" }
                ),
                resolve: async context =>
                {
                    var id = context.GetArgument<Guid>("id");

                    try
                    {
                        var project = await projectRepositoryFactory.Create().GetProjectByTaskId(id);

                        await taskRepositoryFactory.Create().DeleteAsync(id);

                        return new TaskDeletePayload
                        {
                            DeletedTaskId = id,
                            Project = project
                        };
                    }
                    catch (Exception ex)
                    {
                        context.Errors.Add(new ExecutionError(ex.Message, ex));
                        return null;
                    }
                }
            );

            FieldAsync<TaskType>(
                "toggleTaskCompleted",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "taskId" },
                    new QueryArgument<NonNullGraphType<BooleanGraphType>> { Name = "completed" }
                ),
                resolve: async context =>
                {
                    var taskId = context.GetArgument<Guid>("taskId");
                    var completed = context.GetArgument<bool>("completed");

                    return await taskRepositoryFactory.Create().ToggleTaskCompleted(taskId, completed);
                }
            );

            FieldAsync<TaskType>(
                "updateTask",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "taskId" },
                    new QueryArgument<NonNullGraphType<TaskInputType>> { Name = "taskInput" }
                ),
                resolve: async context =>
                {
                    var taskId = context.GetArgument<Guid>("taskId");
                    var taskInput = context.GetArgument<Data.Models.Task>("taskInput");

                    var taskRepository = taskRepositoryFactory.Create();

                    var task = await taskRepository.FindAsync(taskId);

                    if (task == null)
                    {
                        context.Errors.Add(new ExecutionError($"Cannot found task with id '{taskId}'"));
                        return null;
                    }

                    task.Title = taskInput.Title;
                    task.Description = taskInput.Description;
                    task.Deadline = taskInput.Deadline;
                    task.Priority = taskInput.Priority;
                    task.ProjectId = taskInput.ProjectId;

                    return await taskRepository.UpdateAsync(taskId, task);
                }
            );

            FieldAsync<NonNullGraphType<StringGraphType>>(
                "addTagForTask",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "taskId" },
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "tagId" }
                ),
                resolve: async context =>
                {
                    var taskId = context.GetArgument<Guid>("taskId");
                    var tagId = context.GetArgument<Guid>("tagId");

                    var taskRepository = taskRepositoryFactory.Create();

                    try
                    {
                        if (!await taskRepository.TaskHasTagAsync(taskId, tagId))
                        {
                            await taskRepository.AddTagForTask(taskId, tagId);
                        }

                        return $"Tag '{tagId}' added to task '{taskId}'";
                    }
                    catch (Exception ex)
                    {
                        context.Errors.Add(new ExecutionError(ex.Message, ex));
                        return $"Failed to add tag '{tagId}' for task '{taskId}'";
                    }
                }
            );
        }
    }
}
