using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace SchoolApi.Models
{
    public class Classroom
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public int ProfessorID { get ; set; }
        public virtual User Professor {get;set;}

        public virtual ICollection<Classroom> Classrooms {get;set;}
    }
}