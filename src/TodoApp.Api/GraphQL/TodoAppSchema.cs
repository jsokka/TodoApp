using GraphQL;
using GraphQL.Types;

namespace TodoApp.Api.GraphQL
{
    public class TodoAppSchema : Schema
    {
        public TodoAppSchema(IDependencyResolver resolver) : base(resolver)
        {
            Query = resolver.Resolve<TodoAppQuery>();
            Mutation = resolver.Resolve<TodoAppMutation>();
        }
    }
}
