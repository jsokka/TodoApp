using GraphQL;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
