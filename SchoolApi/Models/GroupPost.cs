using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolApi.Models
{
    public class GroupPost
    {
        public int ID { get; set; }
        public int UserID { get; set; }
        [Display(Name = "Title")]
        public string Title { get; set; }
        [Display(Name = "Content")]
        public string Content { get; set; }
        public int GroupID { get; set; }

        // Navigation properties
        public Group Group {get; set;}

        public ICollection<GroupComment> GroupComments { get; set; }

    }
}