using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolApi.Models
{
    public class UserPrivilege
    {
        public int ID { get; set; }
        public int PrivilegeID { get; set; }
        public int UserID { get; set; }

        // Navigation Properties
        public virtual Privilege Privilege {get; set;}
        public virtual User User {get; set;}

    }
}