using GraphQL.DataLoader;
using GraphQL.Types;
using System;
using TodoApp.Data.DependencyInjection;
using TodoApp.Data.Models;
using TodoApp.Data.Repositories;

namespace TodoApp.Api.GraphQL.GraphTypes.ObjectTypes
{
    public class ProjectType : ObjectGraphType<Project>
    {
        public ProjectType(
            IFactory<ITaskRepository> taskRepositoryFactory, 
            IFactory<IProjectRepository> projectRepositoryFactory, 
            IDataLoaderContextAccessor dataLoderAccessor)
        {
            Field("id", p => p.Id, type: typeof(NonNullGraphType<IdGraphType>))
                .Description("Id (guid) of the project");

            Field("name", p => p.Name)
                .Description("Name of the project");

            Field("description", p => p.Description, nullable: true)
                .Description("Description of the project");

            Field("created", p => p.CreatedOn, type: typeof(NonNullGraphType<DateTimeGraphType>))
                .Description("Creation time of the project");

            Field("deadline", p => p.Deadline, nullable: true)
                .Description("Deadline of the project");

            FieldAsync<NonNullGraphType<ListGraphType<NonNullGraphType<TaskType>>>>("tasks",
                arguments: new QueryArguments(
                    new QueryArgument<TaskPriorityEnum> { Name = "priority" },
                    new QueryArgument<BooleanGraphType> { Name = "openOnly" , DefaultValue = false}
                ),
                resolve: async context => 
                {
                    var priority = context.GetArgument<TaskPriority?>("priority");
                    var openOnly = context.GetArgument("openOnly", false);

                    var loaderKey = $"GetTasksByProjectIds_{priority}_{(openOnly ? "openOnly" : "all")}";

                    var loader = dataLoderAccessor.Context.GetOrAddCollectionBatchLoader<Guid, Task>(loaderKey,
                        async ids => await taskRepositoryFactory.Create().GetTasksByProjectIdsAsync(ids, priority, openOnly));

                    return await loader.LoadAsync(context.Source.Id);
                }
            );

            FieldAsync<NonNullGraphType<IntGraphType>>("taskCount", "Number of tasks",
                resolve: async context =>
                {
                    var loader = dataLoderAccessor.Context.GetOrAddBatchLoader<Guid, int>("GetTaskCountByProjects_all",
                        async ids => await projectRepositoryFactory.Create().GetTaskCountByProjects(ids));

                    return await loader.LoadAsync(context.Source.Id);
                }
            );

            FieldAsync<NonNullGraphType<IntGraphType>>("uncompletedTaskCount", "Number of uncompleted tasks",
                resolve: async context =>
                {
                    var loader = dataLoderAccessor.Context.GetOrAddBatchLoader<Guid, int>("GetTaskCountByProjects_uncompleted",
                        async ids => await projectRepositoryFactory.Create().GetTaskCountByProjects(ids, true));

                    return await loader.LoadAsync(context.Source.Id);
                }
            );
        }
    }
}
