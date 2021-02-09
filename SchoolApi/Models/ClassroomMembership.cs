namespace SchoolApi.Models
{
    public class ClassroomMembership
    {
        public int ID { get; set; }
        public int StudentID { get; set; }
        public int ClassroomID { get; set; }
        public virtual User Student {get; set;}
        public virtual Classroom Classroom {get;set;}
    }
}