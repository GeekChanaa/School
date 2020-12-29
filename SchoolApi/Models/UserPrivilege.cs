using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContosoUniversity.Models
{
    public class UserPrivilege
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public int PrivilegeID { get; set; }
        public int UserID { get; set; }

        // Navigation Properties
        public Privilege Privilege {get; set;}
        public User User {get; set;}

    }
}