using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Data.Models;

namespace TodoApp.Api.GraphQL.GraphTypes
{
    public class TaskPriorityEnum : EnumerationGraphType<TaskPriority>
    {
        public TaskPriorityEnum()
        {
            Description = "Four-step priority scale for a task";
        }
    }
}
