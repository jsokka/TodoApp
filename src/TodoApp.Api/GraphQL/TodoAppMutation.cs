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
        partial void AddProjectFields(IProjectRepository project);
        partial void AddTaskFields(ITaskRepository taskRepository);
        partial void AddTagFields(ITagRepository tagRepository);

        public TodoAppMutation(IProjectRepository projectRepository,
            ITagRepository tagRepository, ITaskRepository taskRepository)
        {
            Name = "Mutation";

            AddProjectFields(projectRepository);
            AddTaskFields(taskRepository);
            AddTagFields(tagRepository);
        }
    }
}
