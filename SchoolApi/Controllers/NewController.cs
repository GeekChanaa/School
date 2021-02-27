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
    public class NewController : ControllerBase
    {
        private readonly DataContext _context;

        public NewController(DataContext context)
        {
            _context = context;
        }

        // GET: api/New
        [HttpGet]
        public async Task<ActionResult<IEnumerable<New>>> GetNew()
        {
            return await _context.New.ToListAsync();
        }

        // GET: api/New/5
        [HttpGet("{id}")]
        public async Task<ActionResult<New>> GetNew(int id)
        {
            var @new = await _context.New.FindAsync(id);

            if (@new == null)
            {
                return NotFound();
            }

            return @new;
        }

        // PUT: api/New/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNew(int id, New @new)
        {
            if (id != @new.ID)
            {
                return BadRequest();
            }

            _context.Entry(@new).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NewExists(id))
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

        // POST: api/New
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<New>> PostNew(New @new)
        {
            _context.New.Add(@new);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNew", new { id = @new.ID }, @new);
        }

        // DELETE: api/New/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNew(int id)
        {
            var @new = await _context.New.FindAsync(id);
            if (@new == null)
            {
                return NotFound();
            }

            _context.New.Remove(@new);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NewExists(int id)
        {
            return _context.New.Any(e => e.ID == id);
        }
    }
}
