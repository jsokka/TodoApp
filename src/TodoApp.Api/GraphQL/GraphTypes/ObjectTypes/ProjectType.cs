using GraphQL.Types;
using TodoApp.Data.Models;
using TodoApp.Data.Repositories;
using TodoApp.Data.DependencyInjection;

namespace TodoApp.Api.GraphQL.GraphTypes.ObjectTypes
{
    public class ProjectType : ObjectGraphType<Project>
    {
        public ProjectType(IFactory<ITaskRepository> taskRepositoryFactory)
        {
            Field("id", p => p.Id, type: typeof(NonNullGraphType<IdGraphType>))
                .Description("Id (guid) of the project");
            Field("name", p => p.Name).Description("Name of the project");
            Field("description", p => p.Description, nullable: true)
                .Description("Description of the project");
            Field("created", p => p.CreatedOn, type: typeof(NonNullGraphType<DateTimeGraphType>))
                .Description("Creation time of the project");
            Field("deadline", p => p.Deadline, nullable: true).Description("Deadline of the project");
            FieldAsync<NonNullGraphType<ListGraphType<NonNullGraphType<TaskType>>>>("tasks", 
                resolve: async context => await taskRepositoryFactory.Create().GetTasksByProjectIdAsync(context.Source.Id)
            );
        }
    }
}
