using GraphQL.Types;
using TodoApp.Data.DependencyInjection;
using TodoApp.Data.Repositories;

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
