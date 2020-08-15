using GraphQL.Types;
using GraphQL.Utilities;
using System;

namespace TodoApp.Api.GraphQL
{
    public class TodoAppSchema : Schema
    {
        public TodoAppSchema(IServiceProvider serviceProvider) : base(serviceProvider)
        {
            Query = serviceProvider.GetRequiredService<TodoAppQuery>();
            Mutation = serviceProvider.GetRequiredService<TodoAppMutation>();
        }
    }
}
