using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Data.Models;

namespace TodoApp.Data.Repositories
{
    public interface ITagRepository : IRepository<Tag>
    {
        Task<IEnumerable<Tag>> GetTagsByTaskIdAsync(Guid taskId);
        Task<Tag> GetTagByName(string name);
    }

    public class TagRepository : BaseRepository<Tag>, ITagRepository
    {
        public TagRepository(TodoAppContext db) : base(db)
        {

        }

        public async Task<Tag> GetTagByName(string name)
        {
            return await Db.Tags.SingleOrDefaultAsync(t => t.Name == name);
        }

        public override async Task<Tag> AddAsync(Tag tag)
        {
            if (string.IsNullOrEmpty(tag?.Name))
            {
                throw new ArgumentNullException("tag.Name");
            }

            if (await Db.Tags.AnyAsync(t => t.Name == tag.Name))
            {
                throw new InvalidOperationException($"Tag named {tag.Name} already exists");
            }

            return await base.AddAsync(tag);
        }

        public async Task<IEnumerable<Tag>> GetTagsByTaskIdAsync(Guid taskId)
        {
            return await Db.Tags.Where(t => t.TaskTags.Any(tt => tt.TaskId == taskId)).ToListAsync();
        }
    }
}
