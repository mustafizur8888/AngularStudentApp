using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace StudentServerApp.Models
{
    public class StudentDbContext:DbContext
    {
        public StudentDbContext():base("DbCon")
        {
            
        }

        public DbSet<Student> Students { get; set; }
    }
}