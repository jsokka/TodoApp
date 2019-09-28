using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TodoApp.Data.Models
{
    public enum TaskPriority
    {
        Normal = 0,
        Low,
        High,
        VeryHigh
    }

    [Table("Task")]
    public class Task : BaseEntity
    {
        public Guid ProjectId { get; set; }

        [MaxLength(50), Required]
        public string Title { get; set; }

        [MaxLength(4000)]
        public string Description { get; set; }

        [Column(TypeName = "nvarchar(50)"), Required]
        public TaskPriority Priority { get; set; }

        public DateTime? Deadline { get; set; }

        public DateTime? CompletedOn { get; set; }

        [ForeignKey("ProjectId")]
        public Project Project { get; set; }

        public ICollection<TaskTag> TaskTags { get; set; }
    }
}
