using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContosoUniversity.Models
{
    public class Grade
    {
        public int ID { get; set; }
        [Display(Name = "Value")]
        public float Value { get; set; }
        public int SubjectID { get; set; }
        public int StudentID { get; set; }

        // Navigation Properties
        public Subject Subject {get; set;}
        public User Student {get;set;}
    }
}