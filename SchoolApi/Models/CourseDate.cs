using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolApi.Models
{
    public class CourseDate
    {
        public int ID { get; set; }
        public string Title { get; set; }

        public int? ProfessorID {get; set;}

        public string Salle { get; set; }

        public int? TrainingID { get; set; }

        public int? ModuleID { get; set;}

        #nullable enable
        public string? Description {get;set;}

        #nullable enable
        public string? Type { get; set; }

        public int? SubjectID {get; set;}

        [Display(Name = "Start Date")]
        public DateTime DateStart { get; set; }
      
        [Display(Name = "End Date")]

        public DateTime DateEnd {get ; set;}

        public virtual User Professor {get;set;}
        public virtual Training Training {get; set;}
        public virtual Module Module {get; set;}
        public virtual Subject Subject {get; set;}
    }
}