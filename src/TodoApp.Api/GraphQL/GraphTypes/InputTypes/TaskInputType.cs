using GraphQL.Types;
using TodoApp.Data.Models;

namespace TodoApp.Api.GraphQL.GraphTypes.InputTypes
{
    public class TaskInputType : InputObjectGraphType<Task>
    {
        public TaskInputType()
        {
            Field(t => t.Title);
            Field(t => t.ProjectId, type: typeof(NonNullGraphType<IdGraphType>));
            Field(t => t.Description, nullable: true);
            Field(t => t.Priority, type: typeof(TaskPriorityEnum));
            Field(t => t.Deadline, type: typeof(DateTimeGraphType));
        }
    }
}