using System.Threading.Tasks;
using SchoolApi.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace SchoolApi.Data
{
    public class AuthRepository : IAuthRepository 
    {
        private readonly DataContext _context;

        public AuthRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<User> Register(User user, string password){
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            
            using(var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<User> Login(string email, string password){
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Email == email);

            if(user == null)
                return null;
            if(!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;
            
            return user;
            
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt){
            using(var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i=0; i< computedHash.Length; i++){
                    if(computedHash[i] != passwordHash[i]) return false;
                }
            }
            return true;
        }

        // Unicity of Email
        public async Task<bool> UserExists(string email){
            if(await _context.Users.AnyAsync(x => x.Email == email)){
                return true;
            }
            return false;
        }

        // Unicity of CIN
        public async Task<bool> CinExists(string cin){
            if(await _context.Users.AnyAsync(x => x.CIN == cin)){
                return true;
            }
            return false;
        }

        // Unicity of CNE
        public async Task<bool> CneExists(string cne){
            if(await _context.Users.AnyAsync(x => x.CNE == cne)){
                return true;
            }
            return false;
        }

        public Task<User> GetUser(int id){
            var user = _context.Users
                .Include(u => u.userPrivilege)
                    .ThenInclude(p => p.Privilege)
                .Include(u => u.StudentTraining)
                    .ThenInclude(p => p.Training)
                .FirstOrDefaultAsync(u => u.ID == id);
            return user;
        }
    }
}