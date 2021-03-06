using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolApi.Models
{
    public class AbsenceJustification
    {
        public int ID { get; set; }
        public int AttendanceID {get; set;}
        public int? UserId {get; set;}
        
        
        // Navigation properties
        public virtual Attendance Attendance {get; set;}
        public virtual User User {get; set;}
    }
}