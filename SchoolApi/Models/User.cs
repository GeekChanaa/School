using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContosoUniversity.Models
{
    public class User
    {
        public int ID { get; set; }
        [Required]
        [StringLength(50)]
        [Display(Name = "CIN")]
        public string CIN { get; set; }
        [Required]
        [StringLength(50)]
        [Display(Name = "CNE")]
        public string CNE {get ;set;}
        [Required]
        [StringLength(50)]
        [Display(Name = "First Name")]
        public string FirstName {get;set;}
        [Required]
        [StringLength(50)]
        [Display(Name = "Last Name")]
        public string LastName {get;set;}
        [Required]
        [StringLength(50)]
        [Display(Name = "Code Appoge")]
        public string CodeAppoge {get;set;}
        [Required]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Birth Date")]
        public DateTime date_birth {get;set;}
        
        [Display(Name = "Full Name")]
        public string FullName
        {
            get
            {
                return LastName + ", " + FirstName;
            }
        }

    }
}