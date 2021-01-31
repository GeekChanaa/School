using System.ComponentModel.DataAnnotations;

namespace SchoolApi.Models
{
    public class StudentTraining
    {
        public int ID {get; set;}
        public int? StudentID { get; set; }
        public int? TrainingID { get; set; }

        public virtual User Student { get; set; }
        public virtual Training Training {get; set;}
        
    }
}