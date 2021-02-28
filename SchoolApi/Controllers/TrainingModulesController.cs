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
    public class TrainingModulesController : ControllerBase
    {
        private readonly DataContext _context;

        public TrainingModulesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/TrainingModules
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TrainingModule>>> GetTrainingModules()
        {
            return await _context.TrainingModules.ToListAsync();
        }

        // GET: api/TrainingModules/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TrainingModule>> GetTrainingModule(int id)
        {
            var trainingModule = await _context.TrainingModules.FindAsync(id);

            if (trainingModule == null)
            {
                return NotFound();
            }

            return trainingModule;
        }

        // PUT: api/TrainingModules/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrainingModule(int id, TrainingModule trainingModule)
        {
            if (id != trainingModule.ID)
            {
                return BadRequest();
            }

            _context.Entry(trainingModule).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrainingModuleExists(id))
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

        // POST: api/TrainingModules
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TrainingModule>> PostTrainingModule(TrainingModule trainingModule)
        {
            _context.TrainingModules.Add(trainingModule);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTrainingModule", new { id = trainingModule.ID }, trainingModule);
        }

        // DELETE: api/TrainingModules/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrainingModule(int id)
        {
            var trainingModule = await _context.TrainingModules.FindAsync(id);
            if (trainingModule == null)
            {
                return NotFound();
            }

            _context.TrainingModules.Remove(trainingModule);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // Count : api/User/count
        [HttpGet("count")]
        public async Task<ActionResult<int>> Count(){
            var number =  await _context.TrainingModules.CountAsync();
            return number;
        }

        private bool TrainingModuleExists(int id)
        {
            return _context.TrainingModules.Any(e => e.ID == id);
        }
    }
}
