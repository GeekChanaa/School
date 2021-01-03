using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace SchoolApi.Models
{
    public class TrainingModule
    {
        public int ID {get; set;}
        public int TrainingID {get; set;}
        public int ModuleID {get; set;}

        public Training Training {get; set;}
        public Module Module {get; set;}
    }
}