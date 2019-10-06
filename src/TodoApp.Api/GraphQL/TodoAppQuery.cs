﻿using GraphQL.Types;
using System;
using TodoApp.Api.GraphQL.GraphTypes;
using TodoApp.Api.GraphQL.GraphTypes.ObjectTypes;
using TodoApp.Data.Models;
using TodoApp.Data.Repositories;
using TodoApp.Data.DependencyInjection;
using System.Collections.Generic;
using System.Linq;

namespace TodoApp.Api.GraphQL
{
    public class TodoAppQuery : ObjectGraphType
    {
        public TodoAppQuery(IFactory<IProjectRepository> projectRepositoryFactory,
            IFactory<ITaskRepository> taskRepositoryFactory, IFactory<ITagRepository> tagRepositoryFactory)
        {
            Name = "Query";

            FieldAsync<NonNullGraphType<ListGraphType<NonNullGraphType<TaskType>>>>(
                "tasks",
                arguments: new QueryArguments(
                    new QueryArgument<TaskPriorityEnum> { Name = "priority" }
                ),
                resolve: async context =>
                {
                    var taskRepository = taskRepositoryFactory.Create();

                    var priority = context.GetArgument<TaskPriority?>("priority");
                    if (priority.HasValue)
                    {
                        return await taskRepository.GetTasksByPriority(priority.Value);
                    }

                    return await taskRepository.GetAllAsync();
                }
            );

            FieldAsync<NonNullGraphType<TaskType>>(
                "task",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "id" }
                ),
                resolve: async context => await taskRepositoryFactory.Create().FindAsync(context.GetArgument<Guid>("id"))
            );

            FieldAsync<NonNullGraphType<ListGraphType<NonNullGraphType<ProjectType>>>>(
                "projects",
                resolve: async context => await projectRepositoryFactory.Create().GetAllAsync()
            );

            FieldAsync<NonNullGraphType<ProjectType>>(
                "project",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "id" }
                ),
                resolve: async context => await projectRepositoryFactory.Create().FindAsync(context.GetArgument<Guid>("id"))
            );

            FieldAsync<NonNullGraphType<ListGraphType<NonNullGraphType<TagType>>>>(
                "tags",
                resolve: async context => await tagRepositoryFactory.Create().GetAllAsync()
            );

            FieldAsync<NonNullGraphType<ListGraphType<NonNullGraphType<SearchResult>>>>(
                "search",
                arguments: new QueryArguments(
                    new QueryArgument<StringGraphType> { Name = "searchString" }
                ),
                resolve: async context => 
                {
                    var searchString = context.GetArgument<string>("searchString");

                    if (string.IsNullOrWhiteSpace(searchString))
                    {
                        return new List<UnionGraphType>();
                    }

                    var getTasksTask = taskRepositoryFactory.Create().SearchTasksAsync(searchString);
                    var getProjectsTask = projectRepositoryFactory.Create().SearchProjects(searchString);

                    await System.Threading.Tasks.Task.WhenAll(getTasksTask, getProjectsTask);

                    var tasks = getTasksTask.Result as IEnumerable<object>;
                    var projects = getProjectsTask.Result as IEnumerable<object>;

                    return Enumerable.Concat(tasks, projects);
                }
            );
        }
    }
}
