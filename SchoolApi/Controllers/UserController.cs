using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolApi.Data;
using SchoolApi.Models;
using SchoolApi.Dtos;
using SchoolApi.Helpers;
using AutoMapper;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore.Proxies;
using Microsoft.AspNetCore.Authorization;

namespace SchoolApi.Controllers
{
   // [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IAuthRepository _repo;
        private readonly IMapper _mapper;

        public UserController(IAuthRepository repo,DataContext context, IMapper mapper)
        {
            _context = context;
            _repo = repo;
            _mapper = mapper;
        }

        // GET: api/User
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers([FromQuery] UserParams userParams)
        {
                Console.WriteLine(userParams.Training);
                if(userParams.Training != null){
                    return await _context.Users.Where(u => u.StudentTraining.Training.Title == userParams.Training)
                        .ToListAsync();
                }
                if(userParams.Rank != null){
                    return await _context.Users.Where(u => u.userPrivilege.Privilege.Title == userParams.Rank).ToListAsync();
                }
                else {

                Console.WriteLine("this is not right");
                return await _context.Users
                    .Include(u => u.Subjects)
                    .Include(u => u.userPrivilege)
                        .ThenInclude(p => p.Privilege)
                    .Include(u => u.StudentTraining)
                        .ThenInclude(s => s.Training)
                    .ToListAsync();
                }
            
        }



        // GET: api/User/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users
                .Include(u => u.Subjects)
                .Include(u => u.userPrivilege)
                    .ThenInclude(p => p.Privilege)
                .Include(u => u.StudentTraining)
                    .ThenInclude(s => s.Training)
                        .ThenInclude(t => t.Modules)
                            .ThenInclude(m => m.Subjects)
                .Include(u => u.Grades)
                .FirstOrDefaultAsync(u => u.ID == id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/User/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, UserForUpdateDto userToUpdateDto)
        {
            Console.WriteLine("this is the id : "+id);

            
            User user = await _repo.GetUser(id);


            _mapper.Map(userToUpdateDto,user);

            Console.WriteLine(user);
            
            
            _context.Entry(user).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/User
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser([FromBody]UserForRegisterDto userForRegisterDto)
        {
            // Validating request
            userForRegisterDto.Email = userForRegisterDto.Email.ToLower();

            if(await _repo.UserExists(userForRegisterDto.Email)){
                return BadRequest("Email already exists");
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

        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.ID == id);
        }
    }
}
