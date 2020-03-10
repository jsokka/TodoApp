using GraphQL;
using GraphQL.Types;
using System;
using TodoApp.Api.GraphQL.GraphTypes.ObjectTypes;
using TodoApp.Api.Models;
using TodoApp.Data.DependencyInjection;
using TodoApp.Data.Models;
using TodoApp.Data.Repositories;

namespace TodoApp.Api.GraphQL
{
    public partial class TodoAppMutation
    {
        partial void AddTagFields(IFactory<ITagRepository> tagRepositoryFactory)
        {
            FieldAsync<TagType>(
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
                        return null;
                    }

                    nameInput = nameInput.Trim();

                    var tagRepository = tagRepositoryFactory.Create();

                    var existingTag = await tagRepository.GetTagByName(nameInput);

                    if (existingTag != null)
                    {
                        context.Errors.Add(new ExecutionError($"Tag named {nameInput} already exists"));
                        return existingTag;
                    }

                    return await tagRepository.AddAsync(new Tag { Name = nameInput });
                }
            );

            FieldAsync<TagDeletePayloadType>(
                "deleteTag",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>> { Name = "id" }
                ),
                resolve: async context =>
                {
                    var id = context.GetArgument<Guid>("id");

                    try
                    {
                        await tagRepositoryFactory.Create().DeleteAsync(id);

                        return new TagDeletePayload
                        {
                            DeletedTagId = id
                        };
                    }
                    catch (Exception ex)
                    {
                        context.Errors.Add(new ExecutionError($"{ex.Message}", ex));
                        return null;
                    }
                }
            );
        }
    }
}
