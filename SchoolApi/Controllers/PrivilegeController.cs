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
    public class PrivilegeController : ControllerBase
    {
        private readonly DataContext _context;

        public PrivilegeController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Privilege
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Privilege>>> GetPrivileges()
        {
            return await _context.Privileges.ToListAsync();
        }

        // GET: api/Privilege/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Privilege>> GetPrivilege(int id)
        {
            var privilege = await _context.Privileges.FindAsync(id);

            if (privilege == null)
            {
                return NotFound();
            }

            return privilege;
        }

        // PUT: api/Privilege/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPrivilege(int id, Privilege privilege)
        {
            if (id != privilege.ID)
            {
                return BadRequest();
            }

            _context.Entry(privilege).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PrivilegeExists(id))
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

        // POST: api/Privilege
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Privilege>> PostPrivilege(Privilege privilege)
        {
            _context.Privileges.Add(privilege);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPrivilege", new { id = privilege.ID }, privilege);
        }

        // DELETE: api/Privilege/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePrivilege(int id)
        {
            var privilege = await _context.Privileges.FindAsync(id);
            if (privilege == null)
            {
                return NotFound();
            }

            _context.Privileges.Remove(privilege);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // Count : api/User/count
        [HttpGet("count")]
        public async Task<ActionResult<int>> Count(){
            var number =  await _context.Privileges.CountAsync();
            return number;
        }

        private bool PrivilegeExists(int id)
        {
            return _context.Privileges.Any(e => e.ID == id);
        }
    }
}
