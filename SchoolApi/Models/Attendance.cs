using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolApi.Models
{
    public class Attendance
    {
        public int ID { get; set; }
        public int? UserID{ get; set; }
        public int? CourseDateID{ get; set; }
        
        // Navigation Properties
        public virtual User User{ get; set; }
        public virtual CourseDate CourseDate{ get; set; }
        
    }
}