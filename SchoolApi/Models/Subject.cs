using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolApi.Models
{
    public class Subject
    {
        public int ID { get; set; }
        [Display(Name = "Title")]

        public string Title { get; set; }
        public int ModuleID { get; set; }

        // Navigation Properties
        public Module Module {get; set;}

    }
}