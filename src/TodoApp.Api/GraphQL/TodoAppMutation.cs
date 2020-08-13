using GraphQL.Types;
using TodoApp.Data.DependencyInjection;
using TodoApp.Data.Models;
using TodoApp.Data.Repositories;

namespace TodoApp.Api.GraphQL
{
    public partial class TodoAppMutation : ObjectGraphType
    {
        partial void AddProjectFields(IFactory<IRepository<Project>> projectRepositoryFactory);
        partial void AddTaskFields(IFactory<IRepository<Task>> taskRepositoryFactory,
            IFactory<IRepository<Project>> projectRepositoryFactory);
        partial void AddTagFields(IFactory<IRepository<Tag>> tagRepositoryFactory);

        public TodoAppMutation(IFactory<IRepository<Project>> projectRepositoryFactory,
            IFactory<IRepository<Task>> taskRepositoryFactory, IFactory<IRepository<Tag>> tagRepositoryFactory)
        {
            Name = "Mutation";

            AddProjectFields(projectRepositoryFactory);
            AddTaskFields(taskRepositoryFactory, projectRepositoryFactory);
            AddTagFields(tagRepositoryFactory);
        }
    }
}
