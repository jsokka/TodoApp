using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Api.Models;

namespace TodoApp.Api.GraphQL.GraphTypes.ObjectTypes
{
    public class TagDeletePayloadType : ObjectGraphType<TagDeletePayload>
    {
        public TagDeletePayloadType()
        {
            Field("deletedTagId", t => t.DeletedTagId, type: typeof(IdGraphType))
                .Description("Id (guid) of the deleted tag");
        }
    }
}
