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
    public class GroupPostController : ControllerBase
    {
        private readonly DataContext _context;

        public GroupPostController(DataContext context)
        {
            _context = context;
        }

        // GET: api/GroupPost
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GroupPost>>> GetGroupPosts()
        {
            return await _context.GroupPosts.ToListAsync();
        }

        // GET: api/GroupPost/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GroupPost>> GetGroupPost(int id)
        {
            var groupPost = await _context.GroupPosts.FindAsync(id);

            if (groupPost == null)
            {
                return NotFound();
            }

            return groupPost;
        }

        // PUT: api/GroupPost/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGroupPost(int id, GroupPost groupPost)
        {
            if (id != groupPost.ID)
            {
                return BadRequest();
            }

            _context.Entry(groupPost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GroupPostExists(id))
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

        // POST: api/GroupPost
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<GroupPost>> PostGroupPost(GroupPost groupPost)
        {
            _context.GroupPosts.Add(groupPost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGroupPost", new { id = groupPost.ID }, groupPost);
        }

        // DELETE: api/GroupPost/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGroupPost(int id)
        {
            var groupPost = await _context.GroupPosts.FindAsync(id);
            if (groupPost == null)
            {
                return NotFound();
            }

            _context.GroupPosts.Remove(groupPost);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GroupPostExists(int id)
        {
            return _context.GroupPosts.Any(e => e.ID == id);
        }
    }
}
