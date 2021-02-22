using Microsoft.AspNetCore.Mvc;
using SchoolApi.Data;
using System.Threading.Tasks;
using SchoolApi.Models;
using SchoolApi.Dtos;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Configuration;
using System;

namespace SchoolApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]    
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            _repo = repo;
            _config = config;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody]UserForRegisterDto userForRegisterDto)
        {
            // Validating request

            userForRegisterDto.Email = userForRegisterDto.Email.ToLower();
            Console.WriteLine("USERDTO in the first thing");
            Console.WriteLine(userForRegisterDto.FirstName);
            Console.WriteLine(userForRegisterDto.Email);
            if(await _repo.UserExists(userForRegisterDto.Email)){
                return BadRequest("Email already exists");
            }
            
            if(userForRegisterDto.CIN != null){
                if(await _repo.CinExists(userForRegisterDto.CIN)){
                    return BadRequest("CIN already exists");
                }
            }
            

            if(userForRegisterDto.CNE != null){
                if(await _repo.UserExists(userForRegisterDto.CNE)){
                    return BadRequest("CNE already exists");
                }
            }

            var userToCreate = new User{
                Email = userForRegisterDto.Email,
                CIN= userForRegisterDto.CIN,
                CNE= userForRegisterDto.CNE,
                FirstName = userForRegisterDto.FirstName,
                LastName = userForRegisterDto.LastName,
                CodeAppoge = userForRegisterDto.CodeAppoge,
                date_birth = userForRegisterDto.date_birth
            };

            var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);

            return StatusCode(201);
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
        {
            var userFromRepo = await _repo.Login(userForLoginDto.Email.ToLower(), userForLoginDto.Password);
            
            if(userFromRepo == null)
                return Unauthorized();
            
            var user = await _repo.GetUser(userFromRepo.ID);
                        
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.ID.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Email),
                new Claim(ClaimTypes.Role, user.userPrivilege.Privilege.Title),
                new Claim(ClaimTypes.Role, user.StudentTraining.Training.Title)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds,
            };

            var TokenHandler = new JwtSecurityTokenHandler();

            var token = TokenHandler.CreateToken(tokenDescriptor);

            return Ok(new {
                token = TokenHandler.WriteToken(token),
            });
        }
    }
}