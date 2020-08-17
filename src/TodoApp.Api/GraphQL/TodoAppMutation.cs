using GraphQL.Types;
using TodoApp.Data.DependencyInjection;

namespace TodoApp.Api.GraphQL
{
    public partial class TodoAppMutation : ObjectGraphType
    {
        partial void AddProjectFields(IRepositoryFactory repositoryFactory);
        partial void AddTaskFields(IRepositoryFactory repositoryFactory);
        partial void AddTagFields(IRepositoryFactory repositoryFactory);

        public TodoAppMutation(IRepositoryFactory repositoryFactory)
        {
            Name = "Mutation";

            AddProjectFields(repositoryFactory);
            AddTaskFields(repositoryFactory);
            AddTagFields(repositoryFactory);
        }
    }
}
