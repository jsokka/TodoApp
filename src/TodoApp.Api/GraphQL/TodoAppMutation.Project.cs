using GraphQL;
using GraphQL.Types;
using System;
using TodoApp.Api.GraphQL.GraphTypes.InputTypes;
using TodoApp.Api.GraphQL.GraphTypes.ObjectTypes;
using TodoApp.Data.Models;
using TodoApp.Data.Repositories;

namespace TodoApp.Api.GraphQL
{
    public partial class TodoAppMutation
    {
        partial void AddProjectFields(IProjectRepository projectRepository)
        {
            FieldAsync<NonNullGraphType<ProjectType>>(
                "addProject",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<ProjectInputType>> { Name = "projectInput" }
                ),
                resolve: async context =>
                {
                    var project = context.GetArgument<Project>("projectInput");

                    return await projectRepository.AddAsync(project);
                }
            );

            FieldAsync<NonNullGraphType<ProjectType>>(
                "updateProject",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "projectId" },
                    new QueryArgument<NonNullGraphType<ProjectInputType>> { Name = "projectInput" }
                ),
                resolve: async context =>
                {
                    var projectId = context.GetArgument<Guid>("projectId");
                    var projectInput = context.GetArgument<Project>("projectInput");

                    var project = await projectRepository.FindAsync(projectId);
                    project.Name = projectInput.Name;
                    project.Description = projectInput.Description;
                    project.Deadline = projectInput.Deadline;

                    return await projectRepository.UpdateAsync(projectId, project);
                }
            );

            FieldAsync<NonNullGraphType<StringGraphType>>(
                "deleteProject",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "projectId" }
                ),
                resolve: async context =>
                {
                    var projectId = context.GetArgument<Guid>("projectId");

                    try
                    {
                        await projectRepository.DeleteAsync(projectId);

                        return $"Prject '{projectId} deleted'";
                    }
                    catch (Exception ex)
                    {
                        context.Errors.Add(new ExecutionError($"{ex.Message}", ex));
                        return $"Failed to delete project '{projectId}'";
                    }
                }
            );
        }
    }
}
