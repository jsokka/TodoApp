using GraphQL;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using TodoApp.Api.GraphQL.GraphTypes;
using TodoApp.Api.GraphQL.GraphTypes.ObjectTypes;
using TodoApp.Data.DependencyInjection;
using TodoApp.Data.Models;
using TodoApp.Data.QueryExtensions;

namespace TodoApp.Api.GraphQL
{
    public class TodoAppQuery : ObjectGraphType
    {
        public TodoAppQuery(IRepositoryFactory repositoryFactory)
        {
            Name = "Query";

            FieldAsync<NonNullGraphType<ListGraphType<NonNullGraphType<TaskType>>>>(
                "tasks",
                arguments: new QueryArguments(
                    new QueryArgument<IdGraphType> { Name = "projectId" },
                    new QueryArgument<BooleanGraphType> { Name = "onlyTasksWithoutProject" }
                ),
                resolve: async context =>
                {
                    var taskRepository = repositoryFactory.Create<Task>();

                    var projectId = context.GetArgument<Guid?>("projectId");

                    if (projectId.HasValue)
                    {
                        return await taskRepository.GetTasksByProjectIdAsync(projectId.Value);
                    }

                    if (context.GetArgument("onlyTasksWithoutProject", false))
                    {
                        return await taskRepository.GetTasksByProjectIdAsync(null);
                    }

                    return await taskRepository.GetAllAsync();
                }
            );

            FieldAsync<NonNullGraphType<TaskType>>(
                "task",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "id" }
                ),
                resolve: async context => await repositoryFactory.Create<Task>().FindAsync(context.GetArgument<Guid>("id"))
            );

            FieldAsync<NonNullGraphType<ListGraphType<NonNullGraphType<ProjectType>>>>(
                "projects",
                resolve: async context => await repositoryFactory.Create<Project>().GetAllAsync()
            );

            FieldAsync<NonNullGraphType<ProjectType>>(
                "project",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "id" }
                ),
                resolve: async context => await repositoryFactory.Create<Project>().FindAsync(context.GetArgument<Guid>("id"))
            );

            FieldAsync<NonNullGraphType<ListGraphType<NonNullGraphType<TagType>>>>(
                "tags",
                resolve: async context => await repositoryFactory.Create<Tag>().GetAllAsync()
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

                    var getTasksTask = repositoryFactory.Create<Task>().SearchTasksAsync(searchString);
                    var getProjectsTask = repositoryFactory.Create<Project>().SearchProjects(searchString);

                    await System.Threading.Tasks.Task.WhenAll(getTasksTask, getProjectsTask);

                    var tasks = getTasksTask.Result as IEnumerable<object>;
                    var projects = getProjectsTask.Result as IEnumerable<object>;

                    return Enumerable.Concat(tasks, projects);
                }
            );
        }
    }
}
