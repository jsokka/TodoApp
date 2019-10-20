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
using TodoApp.Data.DependencyInjection;

namespace TodoApp.Api.GraphQL
{
    public partial class TodoAppMutation : ObjectGraphType
    {
        partial void AddProjectFields(IFactory<IProjectRepository> projectRepositoryFactory);
        partial void AddTaskFields(IFactory<ITaskRepository> taskRepositoryFactory, 
            IFactory<IProjectRepository> projectRepositoryFactory);
        partial void AddTagFields(IFactory<ITagRepository> tagRepositoryFactory);

        public TodoAppMutation(IFactory<IProjectRepository> projectRepositoryFactory,
            IFactory<ITaskRepository> taskRepositoryFactory, IFactory<ITagRepository> tagRepositoryFactory)
        {
            Name = "Mutation";

            AddProjectFields(projectRepositoryFactory);
            AddTaskFields(taskRepositoryFactory, projectRepositoryFactory);
            AddTagFields(tagRepositoryFactory);
        }
    }
}
