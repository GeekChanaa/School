using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContosoUniversity.Models
{
    public class Group
    {
        public int ID { get; set; }
        [Display(Name = "Title")]
        public string Title { get; set; }

        public ICollection<GroupPost> GroupsPosts { get; set; }
        public ICollection<GroupMembership> GroupMemberships { get; set; }
    }
}