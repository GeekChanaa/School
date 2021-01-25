using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SchoolApi.Data;
using System;
using System.Linq;
using System.Text;

namespace SchoolApi.Models
{
    public static class SeedData
    {
        public static void Initialize (IServiceProvider serviceProvider){
            
            using (var context = new DataContext(serviceProvider.GetRequiredService<DbContextOptions<DataContext>>())){
                AuthRepository _authRepo = new AuthRepository(context);
                string pass = "chanaasimo";
                byte[] passhash, passsalt;

                // Creating password hash for populating the first database
                _authRepo.CreatePasswordHash(pass,out passhash,out passsalt);
                if(context.Privileges.Any()){
                    return;
                }
                context.Privileges.AddRange(
                    new Models.Privilege
                    {
                        Title = "Admin"
                    },
                    new Models.Privilege
                    {
                        Title = "Teacher"
                    },
                    new Models.Privilege
                    {
                        Title = "Student"
                    },
                    new Models.Privilege
                    {
                        Title = "Guest"
                    }
                );

                context.Users.AddRange(
                  new Models.User{
                      CIN = "KB123456",
                      CNE = "KB123456",
                      FirstName = "KB123456",
                      LastName = "KB123456",
                      CodeAppoge = "546540",
                      date_birth = DateTime.Now,
                      Email = "chanaa.projects@gmail.com",
                      PasswordHash = passhash,
                      PasswordSalt = passsalt,
                  }  
                );

                context.SaveChanges();
                // Seeding user Privileges
                context.UserPrivileges.AddRange(
                    new Models.UserPrivilege{
                        UserID = 1,
                        PrivilegeID = 1,
                    }
                );

                // Seeding Trainings
                

                // 

                context.SaveChanges();
            }
        }
    }
}