using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApp.Api.Models
{
    public class ProjectDeletePayload
    {
        public Guid DeletedProjectId { get; set; }
    }
}
