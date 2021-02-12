using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolApi.Models
{
    public class Training
    {
        public int ID { get; set; }
        public string Title {get; set; }

        public virtual ICollection<Module> Modules {get; set;}
        public virtual ICollection<StudentTraining> StudentTrainings {get; set;}
    }
}