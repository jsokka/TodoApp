using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using TodoApp.Data.Models;

namespace TodoApp.Data
{
    public class TodoAppContext : DbContext
    {
        public TodoAppContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            foreach (var entityType in modelBuilder.Model.GetEntityTypes()
                .Where(t => t.ClrType.IsSubclassOf(typeof(BaseEntity))))
            {
                modelBuilder.Entity(entityType.Name, e => {
                    e.Property(nameof(BaseEntity.Id)).HasDefaultValueSql("newsequentialid()");
                    e.Property(nameof(BaseEntity.CreatedOn)).HasDefaultValueSql("getdate()");
                });
            }

            modelBuilder.Entity<Task>().HasOne(t => t.Project).WithMany(p => p.Tasks).OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<TaskTag>().HasKey(tt => new { tt.TaskId, tt.TagId });
            modelBuilder.Entity<TaskTag>().HasOne(tt => tt.Task).WithMany(r => r.TaskTags).HasForeignKey(tt => tt.TaskId);
            modelBuilder.Entity<TaskTag>().HasOne(tt => tt.Tag).WithMany(r => r.TaskTags).HasForeignKey(tt => tt.TagId);

            modelBuilder.Entity<Task>().Property(t => t.Priority).HasDefaultValue(TaskPriority.Normal);
        }

        public DbSet<Project> Projects { get; set; }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<Tag> Tags { get; set; }
    }
}
