using GraphQL.Types;
using TodoApp.Data.Models;

namespace TodoApp.Api.GraphQL.GraphTypes.InputTypes
{
    public class ProjectInputType : InputObjectGraphType<Project>
    {
        public ProjectInputType()
        {
            Field(p => p.Name);
            Field(p => p.Description, nullable: true);
            Field(p => p.Deadline, nullable: true);
        }
    }
}