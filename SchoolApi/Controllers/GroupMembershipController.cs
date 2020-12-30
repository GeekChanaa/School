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
    public class GroupMembershipController : ControllerBase
    {
        private readonly DataContext _context;

        public GroupMembershipController(DataContext context)
        {
            _context = context;
        }

        // GET: api/GroupMembership
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GroupMembership>>> GetGroupMemberships()
        {
            return await _context.GroupMemberships.ToListAsync();
        }

        // GET: api/GroupMembership/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GroupMembership>> GetGroupMembership(int id)
        {
            var groupMembership = await _context.GroupMemberships.FindAsync(id);

            if (groupMembership == null)
            {
                return NotFound();
            }

            return groupMembership;
        }

        // PUT: api/GroupMembership/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGroupMembership(int id, GroupMembership groupMembership)
        {
            if (id != groupMembership.ID)
            {
                return BadRequest();
            }

            _context.Entry(groupMembership).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GroupMembershipExists(id))
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

        // POST: api/GroupMembership
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<GroupMembership>> PostGroupMembership(GroupMembership groupMembership)
        {
            _context.GroupMemberships.Add(groupMembership);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGroupMembership", new { id = groupMembership.ID }, groupMembership);
        }

        // DELETE: api/GroupMembership/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGroupMembership(int id)
        {
            var groupMembership = await _context.GroupMemberships.FindAsync(id);
            if (groupMembership == null)
            {
                return NotFound();
            }

            _context.GroupMemberships.Remove(groupMembership);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GroupMembershipExists(int id)
        {
            return _context.GroupMemberships.Any(e => e.ID == id);
        }
    }
}
