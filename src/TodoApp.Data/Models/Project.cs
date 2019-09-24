using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TodoApp.Data.Models
{
    [Table("Project")]
    public class Project : BaseEntity
    {
        [MaxLength(50), Required]
        public string Name { get; set; }

        [MaxLength(4000)]
        public string Description { get; set; }

        [Column(TypeName = "date")]
        public DateTime? Deadline { get; set; }

        public ICollection<Task> Tasks { get; set; }
    }
}
