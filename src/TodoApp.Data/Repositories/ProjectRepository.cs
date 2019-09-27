﻿using System;
using System.Collections.Generic;
using System.Text;
using TodoApp.Data.Models;

namespace TodoApp.Data.Repositories
{
    public class ProjectRepository : BaseRepository<Project>, IProjectRepository
    {
        public ProjectRepository(TodoAppContext db) : base(db) { }
    }
}
