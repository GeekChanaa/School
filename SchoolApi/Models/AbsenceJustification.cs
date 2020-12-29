using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContosoUniversity.Models
{
    public class AbsenceJustification
    {
        public int ID { get; set; }
        public int AttendanceID {get; set;}
        public int UserId {get; set;}
        
        
        // Navigation properties
        public Attendance Attendance {get; set;}
        public User User {get; set;}
    }
}