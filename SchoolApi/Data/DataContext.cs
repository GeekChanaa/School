using ContosoUniversity.Models;
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
        public DbSet<Faculty> Faculties { get; set; }
        public DbSet<Grade> Grades { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<GroupComment> GroupComments { get; set; }
        public DbSet<GroupMembership> GroupMemberships { get; set; }
        public DbSet<GroupPost> GroupPosts { get; set; }
        public DbSet<Module> Modules { get; set; }
        public DbSet<Privilege> Privileges { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<UserPrivilege> UserPrivileges { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<AbsenceJustification>().ToTable("AbsenceJustifications");
            modelBuilder.Entity<Assignment>().ToTable("Assignments");
            modelBuilder.Entity<Attendance>().ToTable("Attendances");
            modelBuilder.Entity<Event>().ToTable("Events");
            modelBuilder.Entity<Faculty>().ToTable("Faculties");
            modelBuilder.Entity<Grade>().ToTable("Grades");
            modelBuilder.Entity<Group>().ToTable("Groups");
            modelBuilder.Entity<GroupComment>().ToTable("GroupComments");
            modelBuilder.Entity<GroupMembership>().ToTable("GroupMemberships");
            modelBuilder.Entity<GroupPost>().ToTable("GroupPosts");
            modelBuilder.Entity<Module>().ToTable("Modules");
            modelBuilder.Entity<Privilege>().ToTable("Privileges");
            modelBuilder.Entity<Subject>().ToTable("Subjects");
            modelBuilder.Entity<UserPrivilege>().ToTable("UserPrivileges");
        }
    }
}