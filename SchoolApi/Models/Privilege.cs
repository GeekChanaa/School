using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolApi.Models
{
    public class Privilege
    {
        public int ID { get; set; }
        
        public string Title {get; set;}

    }
}