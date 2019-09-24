using GraphQL;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using TodoApp.Api.GraphQL.GraphTypes.ObjectTypes;
using TodoApp.Data.Models;
using TodoApp.Data.Repositories;

namespace TodoApp.Api.GraphQL
{
    public partial class TodoAppMutation
    {
        partial void AddTagFields(ITagRepository tagRepository)
        {
            FieldAsync<NonNullGraphType<TagType>>(
                "addTag",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "name" }
                ),
                resolve: async context =>
                {
                    var nameInput = context.GetArgument<string>("name");

                    if (string.IsNullOrWhiteSpace(nameInput))
                    {
                        context.Errors.Add(new ExecutionError("Tag name cannot be null or empty"));
                    }

                    nameInput = nameInput.Trim();

                    var existingTag = await tagRepository.GetTagByName(nameInput);

                    if (existingTag != null)
                    {
                        context.Errors.Add(new ExecutionError($"Tag named {nameInput} already exists"));
                        return existingTag;
                    }

                    if (context.Errors.Any())
                    {
                        return null;
                    }

                    return await tagRepository.AddAsync(new Tag { Name = nameInput });
                }
            );

            FieldAsync<NonNullGraphType<StringGraphType>>(
                "deleteTag",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "id" }
                ),
                resolve: async context =>
                {
                    var id = context.GetArgument<Guid>("id");

                    try
                    {
                        await tagRepository.DeleteAsync(id);

                        return $"Tag {id} deleted";
                    }
                    catch (Exception ex)
                    {
                        context.Errors.Add(new ExecutionError($"{ex.Message}", ex));
                        return $"Failed to delete tag '{id}'";
                    }
                }
            );
        }
    }
}
