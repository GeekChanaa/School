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
    public class GroupCommentController : ControllerBase
    {
        private readonly DataContext _context;

        public GroupCommentController(DataContext context)
        {
            _context = context;
        }

        // GET: api/GroupComment
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GroupComment>>> GetGroupComments()
        {
            return await _context.GroupComments.ToListAsync();
        }

        // GET: api/GroupComment/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GroupComment>> GetGroupComment(int id)
        {
            var groupComment = await _context.GroupComments.FindAsync(id);

            if (groupComment == null)
            {
                return NotFound();
            }

            return groupComment;
        }

        // PUT: api/GroupComment/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGroupComment(int id, GroupComment groupComment)
        {
            if (id != groupComment.ID)
            {
                return BadRequest();
            }

            _context.Entry(groupComment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GroupCommentExists(id))
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

        // POST: api/GroupComment
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<GroupComment>> PostGroupComment(GroupComment groupComment)
        {
            _context.GroupComments.Add(groupComment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGroupComment", new { id = groupComment.ID }, groupComment);
        }

        // DELETE: api/GroupComment/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGroupComment(int id)
        {
            var groupComment = await _context.GroupComments.FindAsync(id);
            if (groupComment == null)
            {
                return NotFound();
            }

            _context.GroupComments.Remove(groupComment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GroupCommentExists(int id)
        {
            return _context.GroupComments.Any(e => e.ID == id);
        }
    }
}
