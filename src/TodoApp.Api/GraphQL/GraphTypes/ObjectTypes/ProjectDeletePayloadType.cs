using GraphQL.Types;
using TodoApp.Api.Models;

namespace TodoApp.Api.GraphQL.GraphTypes.ObjectTypes
{
    public class ProjectDeletePayloadType : ObjectGraphType<ProjectDeletePayload>
    {
        public ProjectDeletePayloadType()
        {
            Field("deletedProjectId", t => t.DeletedProjectId, type: typeof(IdGraphType))
                .Description("Id (guid) of the deleted project");
        }
    }
}
