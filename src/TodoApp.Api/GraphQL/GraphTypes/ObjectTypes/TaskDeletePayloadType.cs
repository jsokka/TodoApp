using GraphQL.Types;
using TodoApp.Api.Models;

namespace TodoApp.Api.GraphQL.GraphTypes.ObjectTypes
{
    public class TaskDeletePayloadType : ObjectGraphType<TaskDeletePayload>
    {
        public TaskDeletePayloadType()
        {
            Field("deletedTaskId", t => t.DeletedTaskId, type: typeof(IdGraphType))
                .Description("Id (guid) of the deleted task");
            Field("project", t => t.Project, type: typeof(ProjectType))
                .Description("Project of the deleted task");
        }
    }
}
