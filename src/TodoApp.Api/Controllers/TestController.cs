using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
using TodoApp.Data;
using TodoApp.Data.Models;
using TodoApp.Data.Repositories;

namespace TodoApp.Api.Controllers
{
    public class TestController : Controller
    {
        private readonly ITaskRepository taskRepository;

        public TestController(ITaskRepository taskRepository)
        {
            this.taskRepository = taskRepository;
        }

        public async Task<ActionResult<Data.Models.Task>> GetFetch(Guid id)
        {
            var task = await taskRepository.FindAsync(id);

            if (task == null)
                return NotFound();

            return Ok(task);
        }

        public async Task<ActionResult> GetAdd()
        {
            var task = new Data.Models.Task
            {
                Title = "Clean the house",
                Project = new Project
                {
                    Name = "Housekeeping"
                },
                TaskTags = new[]
                {
                    new TaskTag
                    {
                        Tag = new Tag { Name = "Home" }
                    }
                }
            };

            return Ok(await taskRepository.AddAsync(task));
        }
    }
}
