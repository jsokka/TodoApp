using GraphQL.DataLoader;
using GraphQL.Types;
using System;
using TodoApp.Data.DependencyInjection;
using TodoApp.Data.Models;
using TodoApp.Data.QueryExtensions;

namespace TodoApp.Api.GraphQL.GraphTypes.ObjectTypes
{
    public class TaskType : ObjectGraphType<Task>
    {
        public TaskType(
            IRepositoryFactory repositoryFactory,
            IDataLoaderContextAccessor dataLoaderAccessor)
        {
            Field("id", t => t.Id, type: typeof(NonNullGraphType<IdGraphType>), nullable: false).Description("Id of the task");
            Field("title", t => t.Title).Description("Title of the task");
            Field("description", t => t.Description, nullable: true).Description("Description of the task");
            Field("deadline", t => t.Deadline, type: typeof(DateTimeGraphType)).Description("Deadline of the task");
            Field("priority", t => t.Priority, type: typeof(NonNullGraphType<TaskPriorityEnum>)).Description("Priority of the task");
            Field("isCompleted", t => t.CompletedOn.HasValue, nullable: false).Description("Indicates whether the task is completed");
            Field("completedOn", t => t.CompletedOn, type: typeof(DateTimeGraphType)).Description("Date and time the task wasc completed");
            Field("created", t => t.CreatedOn, type: typeof(NonNullGraphType<DateTimeGraphType>))
                .Description("Creation time of the task");

            FieldAsync<ProjectType>("project",
                resolve: async context =>
                {
                    if (!context.Source.ProjectId.HasValue)
                    {
                        return null;
                    }

                    var loader = dataLoaderAccessor.Context.GetOrAddBatchLoader<Guid, Project>("GetProjectsByIds",
                        fetchFunc: async ids => await repositoryFactory.Create<Project>().GetProjectsByIdsAsync(ids));

                    return await loader.LoadAsync(context.Source.ProjectId.Value);
                }
            );

            FieldAsync<NonNullGraphType<ListGraphType<NonNullGraphType<TagType>>>>("tags",
                resolve: async context =>
                {
                    var loader = dataLoaderAccessor.Context.GetOrAddCollectionBatchLoader<Guid, Tag>("GetTagsByTaskIds",
                        fetchFunc: async id => await repositoryFactory.Create<Tag>().GetTagsByTaskIdsAsync(id));

                    return await loader.LoadAsync(context.Source.Id);
                }
            );
        }
    }
}
