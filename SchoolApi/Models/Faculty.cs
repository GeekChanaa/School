using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolApi.Models
{
    public class Faculty
    
    {
        public int ID { get; set; }
        [Display(Name = "Title")]
        public string Title { get; set; }
        public int ChefID { get; set; }

        // Navigation Properties
        public User Chef {get;set;}
    }
}