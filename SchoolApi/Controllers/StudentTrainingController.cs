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
    public class StudentTrainingController : ControllerBase
    {
        private readonly DataContext _context;

        public StudentTrainingController(DataContext context)
        {
            _context = context;
        }

        // GET: api/StudentTraining
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentTraining>>> GetStudentTraining()
        {
            return await _context.StudentTraining.ToListAsync();
        }

        // GET: api/StudentTraining/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StudentTraining>> GetStudentTraining(int id)
        {
            var studentTraining = await _context.StudentTraining.FindAsync(id);

            if (studentTraining == null)
            {
                return NotFound();
            }

            return studentTraining;
        }

        // PUT: api/StudentTraining/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudentTraining(int id, StudentTraining studentTraining)
        {
            if (id != studentTraining.ID)
            {
                return BadRequest();
            }

            _context.Entry(studentTraining).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentTrainingExists(id))
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

        // POST: api/StudentTraining
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StudentTraining>> PostStudentTraining(StudentTraining studentTraining)
        {
            _context.StudentTraining.Add(studentTraining);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudentTraining", new { id = studentTraining.ID }, studentTraining);
        }

        // DELETE: api/StudentTraining/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudentTraining(int id)
        {
            var studentTraining = await _context.StudentTraining.FindAsync(id);
            if (studentTraining == null)
            {
                return NotFound();
            }

            _context.StudentTraining.Remove(studentTraining);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // Count : api/User/count
        [HttpGet("count")]
        public async Task<ActionResult<int>> Count(){
            var number =  await _context.StudentTraining.CountAsync();
            return number;
        }

        private bool StudentTrainingExists(int id)
        {
            return _context.StudentTraining.Any(e => e.ID == id);
        }
    }
}
