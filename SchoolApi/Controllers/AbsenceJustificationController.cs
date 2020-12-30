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
    public class AbsenceJustificationController : ControllerBase
    {
        private readonly DataContext _context;

        public AbsenceJustificationController(DataContext context)
        {
            _context = context;
        }

        // GET: api/AbsenceJustification
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AbsenceJustification>>> GetAbsenceJustifications()
        {
            return await _context.AbsenceJustifications.ToListAsync();
        }

        // GET: api/AbsenceJustification/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AbsenceJustification>> GetAbsenceJustification(int id)
        {
            var absenceJustification = await _context.AbsenceJustifications.FindAsync(id);

            if (absenceJustification == null)
            {
                return NotFound();
            }

            return absenceJustification;
        }

        // PUT: api/AbsenceJustification/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAbsenceJustification(int id, AbsenceJustification absenceJustification)
        {
            if (id != absenceJustification.ID)
            {
                return BadRequest();
            }

            _context.Entry(absenceJustification).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AbsenceJustificationExists(id))
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

        // POST: api/AbsenceJustification
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AbsenceJustification>> PostAbsenceJustification(AbsenceJustification absenceJustification)
        {
            _context.AbsenceJustifications.Add(absenceJustification);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAbsenceJustification", new { id = absenceJustification.ID }, absenceJustification);
        }

        // DELETE: api/AbsenceJustification/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAbsenceJustification(int id)
        {
            var absenceJustification = await _context.AbsenceJustifications.FindAsync(id);
            if (absenceJustification == null)
            {
                return NotFound();
            }

            _context.AbsenceJustifications.Remove(absenceJustification);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AbsenceJustificationExists(int id)
        {
            return _context.AbsenceJustifications.Any(e => e.ID == id);
        }
    }
}
