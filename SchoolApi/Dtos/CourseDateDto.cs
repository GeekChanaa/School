using SchoolApi.Models;


namespace SchoolApi.Dtos
{
    public class CourseDateDto
    {
        public string Title {get; set;}
        public string Description { get; set; }
        public string Salle { get; set; }
        public int ProfessorID { get; set; }
        public int TrainingID { get; set; }
        public int ModuleID { get; set; }
        public int SubjectID { get; set; }
        public string StartDate {get; set;}
        public string EndDate {get; set;}
        public string Type {get; set;}

       
    }
}