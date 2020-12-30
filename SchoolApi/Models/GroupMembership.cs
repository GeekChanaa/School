using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolApi.Models
{
    public class GroupMembership
    {
        public int ID { get; set; }
        public int UserID { get; set; }
        public int GroupID { get; set; }
        [Display(Name = "Rank")]
        public string Rank { get; set; }

        public User User {get ; set;}
        public Group Group {get ; set;}
    }
}