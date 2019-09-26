using GraphQL;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using TodoApp.Api.GraphQL.GraphTypes;
using TodoApp.Api.GraphQL.GraphTypes.InputTypes;
using TodoApp.Api.GraphQL.GraphTypes.ObjectTypes;
using TodoApp.Data.Models;
using TodoApp.Data.Repositories;

namespace TodoApp.Api.GraphQL
{
    public partial class TodoAppMutation : ObjectGraphType
    {
        partial void AddProjectFields(ContextServiceLocator contextServiceLocator);
        partial void AddTaskFields(ContextServiceLocator contextServiceLocator);
        partial void AddTagFields(ContextServiceLocator contextServiceLocator);

        public TodoAppMutation(ContextServiceLocator contextServiceLocator)
        {
            Name = "Mutation";

            AddProjectFields(contextServiceLocator);
            AddTaskFields(contextServiceLocator);
            AddTagFields(contextServiceLocator);
        }
    }
}
