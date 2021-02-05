

namespace SchoolApi.Models
{
    public class DocumentRequest
    {
        public int ID {get; set;}
        public int StudentID {get; set;}
        public string Type {get ;set;}
        public string Training {get; set;}

        public virtual User Student {get; set;}
    }
}