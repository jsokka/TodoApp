using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TodoApp.Data.Models
{
    [Table("Tag")]
    public class Tag : BaseEntity
    {
        [MaxLength(50), Required]
        public string Name { get; set; }

        public ICollection<TaskTag> TaskTags { get; set; }
    }
}
