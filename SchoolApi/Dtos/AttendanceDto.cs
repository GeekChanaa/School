using System;

namespace SchoolApi.Dtos
{
    public class AttendanceDto
    {
        public DateTime DateStart{ get; set; }
        public DateTime DateEnd{ get; set; }
        public int UserID{ get; set; }
        public int EventID{ get; set; }
    }
}