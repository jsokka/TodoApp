using GraphQL;
using GraphQL.Types;
using System;
using TodoApp.Api.GraphQL.GraphTypes.InputTypes;
using TodoApp.Api.GraphQL.GraphTypes.ObjectTypes;
using TodoApp.Data.Repositories;

namespace TodoApp.Api.GraphQL
{
    public partial class TodoAppMutation
    {
        partial void AddTaskFields(ITaskRepository taskRepository)
        {
            FieldAsync<NonNullGraphType<TaskType>>(
                "addTask",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<TaskInputType>> { Name = "taskInput" }
                ),
                resolve: async context =>
                {
                    var task = context.GetArgument<Data.Models.Task>("taskInput");

                    return await taskRepository.AddAsync(task);
                }
            );

            FieldAsync<NonNullGraphType<StringGraphType>>(
                "deleteTask",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "id" }
                ),
                resolve: async context =>
                {
                    var id = context.GetArgument<Guid>("id");

                    try
                    {
                        await taskRepository.DeleteAsync(id);

                        return $"Task {id} deleted";
                    }
                    catch (Exception ex)
                    {
                        context.Errors.Add(new ExecutionError(ex.Message, ex));
                        return $"Failed to delete task '{id}'";
                    }
                }
            );

            FieldAsync<NonNullGraphType<TaskType>>(
                "toggleTaskCompleted",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "taskId" },
                    new QueryArgument<NonNullGraphType<BooleanGraphType>> { Name = "completed" }
                ),
                resolve: async context =>
                {
                    var taskId = context.GetArgument<Guid>("taskId");
                    var completed = context.GetArgument<bool>("completed");

                    return await taskRepository.ToggleTaskCompleted(taskId, completed);
                }
            );

            FieldAsync<NonNullGraphType<TaskType>>(
                "updateTask",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "taskId" },
                    new QueryArgument<NonNullGraphType<TaskInputType>> { Name = "taskInput" }
                ),
                resolve: async context =>
                {
                    var taskId = context.GetArgument<Guid>("taskId");
                    var taskInput = context.GetArgument<Data.Models.Task>("taskInput");

                    var task = await taskRepository.FindAsync(taskId);

                    if (task == null)
                    {
                        context.Errors.Add(new ExecutionError($"Task not found with '{taskId}'"));
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
