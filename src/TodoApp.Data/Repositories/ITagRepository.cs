using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TodoApp.Data.Models;

namespace TodoApp.Data.Repositories
{
    public interface ITagRepository : IRepository<Tag>
    {
        Task<IEnumerable<Tag>> GetTagsByTaskIdAsync(Guid taskId);
        Task<Tag> GetTagByName(string name);
    }
}
