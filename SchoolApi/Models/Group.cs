using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolApi.Models
{
    public class Group
    {
        public int ID { get; set; }
        [Display(Name = "Title")]
        public string Title { get; set; }

        public virtual ICollection<GroupPost> GroupsPosts { get; set; }
        public virtual ICollection<GroupMembership> GroupMemberships { get; set; }
    }
}