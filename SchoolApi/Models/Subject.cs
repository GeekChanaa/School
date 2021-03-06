using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolApi.Models
{
    public class Subject
    {
        public int ID { get; set;}
        [Display(Name = "Title")]

        public string Title { get; set; }
        public int ModuleID { get; set; }
        public int? ChefID { get; set; }

        // Navigation Properties
        public virtual Module Module {get; set;}
        public virtual User Chef{get; set;}
    }
}