using System;
using System.ComponentModel.DataAnnotations;



namespace SchoolApi.Dtos
{
    public class UserForRegisterDto
    {   
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public string CIN { get; set; }
        public string CNE {get ;set;}
        [Required]
        public string FirstName {get;set;}
        [Required]
        public string LastName {get;set;}
        public string CodeAppoge {get;set;}
        [Required]
        public DateTime date_birth {get;set;}
        
    }
}