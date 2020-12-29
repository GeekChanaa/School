using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContosoUniversity.Models
{
    public class Event
    {
        public int ID { get; set; }
        [Display(Name = "Title")]
        public string Title { get; set; }
        [Display(Name = "Starting Date")]

        public DateTime DateStart { get; set; }
        [Display(Name = "End Date")]
        public DateTime DateEnd { get; set; }
        [Display(Name = "Type")]
        public string Type { get; set; }

    }
}