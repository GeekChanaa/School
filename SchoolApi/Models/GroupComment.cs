using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContosoUniversity.Models
{
    public class GroupComment
    {
        public int ID { get; set; }
        public int UserID { get; set; }
        [Display(Name = "Content")]
        public string Content { get; set; }
        public int PostID { get; set; }

        public GroupPost Post{get;set;}

    }
}