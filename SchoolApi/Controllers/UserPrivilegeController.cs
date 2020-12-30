using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolApi.Data;
using SchoolApi.Models;

namespace SchoolApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserPrivilegeController : ControllerBase
    {
        private readonly DataContext _context;

        public UserPrivilegeController(DataContext context)
        {
            _context = context;
        }

        // GET: api/UserPrivilege
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserPrivilege>>> GetUserPrivileges()
        {
            return await _context.UserPrivileges.ToListAsync();
        }

        // GET: api/UserPrivilege/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserPrivilege>> GetUserPrivilege(int id)
        {
            var userPrivilege = await _context.UserPrivileges.FindAsync(id);

            if (userPrivilege == null)
            {
                return NotFound();
            }

            return userPrivilege;
        }

        // PUT: api/UserPrivilege/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserPrivilege(int id, UserPrivilege userPrivilege)
        {
            if (id != userPrivilege.ID)
            {
                return BadRequest();
            }

            _context.Entry(userPrivilege).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserPrivilegeExists(id))
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

        // POST: api/UserPrivilege
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UserPrivilege>> PostUserPrivilege(UserPrivilege userPrivilege)
        {
            _context.UserPrivileges.Add(userPrivilege);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserPrivilege", new { id = userPrivilege.ID }, userPrivilege);
        }

        // DELETE: api/UserPrivilege/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserPrivilege(int id)
        {
            var userPrivilege = await _context.UserPrivileges.FindAsync(id);
            if (userPrivilege == null)
            {
                return NotFound();
            }

            _context.UserPrivileges.Remove(userPrivilege);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserPrivilegeExists(int id)
        {
            return _context.UserPrivileges.Any(e => e.ID == id);
        }
    }
}
