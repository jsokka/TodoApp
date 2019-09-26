using GraphQL.Types;
using System;
using TodoApp.Api.GraphQL.GraphTypes;
using TodoApp.Api.GraphQL.GraphTypes.ObjectTypes;
using TodoApp.Data.Models;
using TodoApp.Data.Repositories;

namespace TodoApp.Api.GraphQL
{
    public class TodoAppQuery : ObjectGraphType
    {
        public TodoAppQuery(ContextServiceLocator contextServiceLocator)
        {
            Name = "Query";

            FieldAsync<NonNullGraphType<ListGraphType<NonNullGraphType<TaskType>>>>(
                "tasks",
                arguments: new QueryArguments(
                    new QueryArgument<TaskPriorityEnum> { Name = "priority" }
                ),
                resolve: async context =>
                {
                    var priority = context.GetArgument<TaskPriority?>("priority");
                    if (priority.HasValue)
                    {
                        return await contextServiceLocator.TaskRepository.GetTasksByPriority(priority.Value);
                    }

                    return await contextServiceLocator.TaskRepository.GetAllAsync();
                }
            );

            FieldAsync<NonNullGraphType<TaskType>>(
                "task",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "id" }
                ),
                resolve: async context => await contextServiceLocator.TaskRepository.FindAsync(context.GetArgument<Guid>("id"))
            );

            FieldAsync<NonNullGraphType<ListGraphType<NonNullGraphType<ProjectType>>>>(
                "projects",
                resolve: async context => await contextServiceLocator.ProjectRepository.GetAllAsync()
            );

            FieldAsync<NonNullGraphType<ProjectType>>(
                "project",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "id" }
                ),
                resolve: async context => await contextServiceLocator.ProjectRepository.FindAsync(context.GetArgument<Guid>("id"))
            );

            FieldAsync<NonNullGraphType<ListGraphType<NonNullGraphType<TagType>>>>(
                "tags",
                resolve: async context => await contextServiceLocator.TagRepository.GetAllAsync()
            );
        }
    }
}
