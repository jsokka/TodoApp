using GraphQL.Types;
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
