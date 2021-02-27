using SchoolApi.Models;
using Microsoft.EntityFrameworkCore;

namespace SchoolApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        public DbSet<User> Users { get; set; }
        public DbSet<AbsenceJustification> AbsenceJustifications { get; set; }
        public DbSet<Assignment> Assignments { get; set; }
        public DbSet<Attendance> Attendances { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<Grade> Grades { get; set; }
        public DbSet<Module> Modules { get; set; }
        public DbSet<Privilege> Privileges { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<UserPrivilege> UserPrivileges { get; set; }
        public DbSet<Training> Trainings {get; set;}
        public DbSet<TrainingModule> TrainingModules {get; set;}
        public DbSet<CourseDate> CourseDate {get; set;}


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("Users");
            
            modelBuilder.Entity<AbsenceJustification>().ToTable("AbsenceJustifications");
            modelBuilder.Entity<Assignment>().ToTable("Assignments");
            modelBuilder.Entity<Attendance>().ToTable("Attendances");
            modelBuilder.Entity<Event>().ToTable("Events");
            modelBuilder.Entity<Grade>().ToTable("Grades");
            modelBuilder.Entity<Module>().ToTable("Modules");
            modelBuilder.Entity<Privilege>().ToTable("Privileges");
            modelBuilder.Entity<Subject>().ToTable("Subjects");
            modelBuilder.Entity<UserPrivilege>().ToTable("UserPrivileges");
            modelBuilder.Entity<Training>().ToTable("Trainings");
            modelBuilder.Entity<TrainingModule>().ToTable("TrainingModules");
            modelBuilder.Entity<CourseDate>().ToTable("CourseDates");
        }


        public DbSet<SchoolApi.Models.StudentTraining> StudentTraining { get; set; }


        public DbSet<SchoolApi.Models.DocumentRequest> DocumentRequest { get; set; }
        public DbSet<SchoolApi.Models.Classroom> Classroom { get; set; }
        public DbSet<SchoolApi.Models.Announcement> Announcement { get; set; }
        public DbSet<SchoolApi.Models.New> New { get; set; }
    }
}