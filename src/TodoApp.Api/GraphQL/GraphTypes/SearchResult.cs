using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Api.GraphQL.GraphTypes.ObjectTypes;

namespace TodoApp.Api.GraphQL.GraphTypes
{
    public class SearchResult : UnionGraphType
    {
        public SearchResult()
        {
            Type<ProjectType>();
            Type<TaskType>();
        }
    }
}
