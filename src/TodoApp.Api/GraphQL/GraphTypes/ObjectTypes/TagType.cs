using GraphQL.Types;
using TodoApp.Data.Models;

namespace TodoApp.Api.GraphQL.GraphTypes.ObjectTypes
{
    public class TagType : ObjectGraphType<Tag>
    {
        public TagType()
        {
            Field("id", t => t.Id, type: typeof(IdGraphType)).Description("Id (guid) of the tag");
            Field("name", t => t.Name).Description("Name of the tag");
            Field("created", t => t.CreatedOn, type: typeof(DateTimeGraphType)).Description("Creation date and time of the tag");
        }
    }
}
