using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolApi.Models
{
    public class Attendance
    {
        public int ID { get; set; }
        [Display(Name = "From")]
        public DateTime DateStart{ get; set; }
        [Display(Name = "To")]
        public DateTime DateEnd{ get; set; }
        public int UserID{ get; set; }
        public int EventID{ get; set; }
        
        // Navigation Properties
        public virtual User User{ get; set; }
        public virtual Event Event{ get; set; }
        
    }
}