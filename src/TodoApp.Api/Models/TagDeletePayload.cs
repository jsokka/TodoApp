using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Data.Models;

namespace TodoApp.Api.Models
{
    public class TagDeletePayload
    {
        public Guid DeletedTagId { get; set; }
    }
}
