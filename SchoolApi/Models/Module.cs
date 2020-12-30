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
        
        // Navigation propery
        public ICollection<Subject> Subjects { get; set; }
    }
}