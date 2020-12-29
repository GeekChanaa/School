using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContosoUniversity.Models
{
    public class Attendance
    {
        public int ID { get; set; }
        [Display(Name = "From")]
        public DateTime DateStart;
        [Display(Name = "To")]
        public DateTime DateEnd;
        public int UserID;
        public int EventID;
        
        // Navigation Properties
        public User User;
        public Event Event;
        
    }
}