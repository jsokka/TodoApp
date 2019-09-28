using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TodoApp.Data.Models
{
    [Table("TaskTag")]
    public class TaskTag
    {
        public Guid TaskId { get; set; }

        public Guid TagId { get; set; }

        public Task Task { get; set; }

        public Tag Tag { get; set; }
    }
}
