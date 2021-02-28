using System;

namespace SchoolApi.Models
{
    public class New
    {
        public int ID { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate {get ; set; }
        public String Content {get; set;}

        public String Title { get; set; }
    }
}