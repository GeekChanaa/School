using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolApi.Models
{
    public class Module
    {
        public int ID { get; set; }
        [Display(Name = "Title")]
        public string Title { get; set; }

        public int TrainingID { get; set; }

        public int ChefID {get; set;}
        
        // Navigation propery
        public virtual User Chef {get; set;}
        public virtual Training Training { get; set;}
        public virtual ICollection<Subject> Subjects {get; set;}
    }
}