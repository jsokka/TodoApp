using GraphQL.Types;
using System;
using System.Collections;
using TodoApp.Data.Models;
using TodoApp.Data.Repositories;
using TodoApp.Data.DependencyInjection;
using GraphQL.DataLoader;

namespace TodoApp.Api.GraphQL.GraphTypes.ObjectTypes
{
    public class TaskType : ObjectGraphType<Task>
    {
        public TaskType(IDataLoaderContextAccessor dataLoaderAccessor,
            IFactory<IProjectRepository> projectRepositoryFactory, 
            IFactory<ITagRepository> tagRepositoryFactory)
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

            FieldAsync<NonNullGraphType<ProjectType>>("project",
                resolve: async context => 
                {
                    var loader = dataLoaderAccessor.Context.GetOrAddBatchLoader<Guid, Project>("GetProjectsByIds",
                        fetchFunc: async ids => await projectRepositoryFactory.Create().GetProjectsByIdsAsync(ids));
                    
                    return await loader.LoadAsync(context.Source.ProjectId);
                }
            );

            FieldAsync<NonNullGraphType<ListGraphType<NonNullGraphType<TagType>>>>("tags",
                resolve: async context => 
                {
                    var loader = dataLoaderAccessor.Context.GetOrAddCollectionBatchLoader<Guid, Tag>("GetTagsByTaskIds",
                        fetchFunc: async id => await tagRepositoryFactory.Create().GetTagsByTaskIdsAsync(id));

                    return await loader.LoadAsync(context.Source.Id);
                    //return await tagRepositoryFactory.Create().GetTagsByTaskIdsAsync(context.Source.Id);
                }
            );
        }
    }
}
