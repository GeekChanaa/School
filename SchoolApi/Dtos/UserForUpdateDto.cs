using System;



namespace SchoolApi.Dtos
{
    public class UserForUpdateDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string CIN { get; set; }
        public string CNE {get ;set;}
        public string FirstName {get;set;}
        public string LastName {get;set;}
        public string CodeAppoge {get;set;}
        public DateTime date_birth {get;set;}
        
    }
}