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
using System.Globalization;


namespace SchoolApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseDateController : ControllerBase
    {
        private readonly DataContext _context;

        public CourseDateController(DataContext context)
        {
            _context = context;
        }

        // GET: api/CourseDate
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseDate>>> GetCourseDate([FromQuery] CourseDateParams courseDateParams)
        {
            Console.WriteLine("this is the course date api");
            Console.WriteLine(courseDateParams.Training);
            if(courseDateParams.Training != null)
                return await _context.CourseDate.Where(c => c.Training.Title == courseDateParams.Training)
                    .Include(c=> c.Training )
                        .ThenInclude(t => t.StudentTrainings)
                            .ThenInclude(t=>t.Student).ToListAsync();
            if(courseDateParams.ProfessorID != 0){
                return await _context.CourseDate.Where(c => c.ProfessorID == courseDateParams.ProfessorID)
                    .Include(c=> c.Training )
                        .ThenInclude(t => t.StudentTrainings)
                            .ThenInclude(t=>t.Student).ToListAsync();
            }
            return await _context.CourseDate
                .Include(c=> c.Training )
                    .ThenInclude(t => t.StudentTrainings)
                        .ThenInclude(t=>t.Student).ToListAsync();
        }

        // GET: api/CourseDate/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CourseDate>> GetCourseDate(int id)
        {
            var courseDate = await _context.CourseDate
                    .Include(c=> c.Training )
                        .ThenInclude(t => t.StudentTrainings)
                            .ThenInclude(t=>t.Student).FirstOrDefaultAsync(c=> c.ID == id);

            if (courseDate == null)
            {
                return NotFound();
            }

            return courseDate;
        }

        // PUT: api/CourseDate/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourseDate(int id, CourseDate courseDate)
        {
            if (id != courseDate.ID)
            {
                return BadRequest();
            }

            _context.Entry(courseDate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseDateExists(id))
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

        // POST: api/CourseDate
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CourseDate>> PostCourseDate([FromBody] CourseDateDto courseDateDto)
        {

            Console.WriteLine("========== this is for test purposes =========");
            Console.WriteLine(courseDateDto.StartDate);
            Console.WriteLine(courseDateDto.EndDate);
            Console.WriteLine(courseDateDto.ProfessorID);
            DateTime start = DateTime.ParseExact(courseDateDto.StartDate, "yyyy-MM-dd HH:mm", CultureInfo.InvariantCulture);
            DateTime end = DateTime.ParseExact(courseDateDto.EndDate, "yyyy-MM-dd HH:mm", CultureInfo.InvariantCulture);
            CourseDate @courseDate = new CourseDate{
                Title = courseDateDto.Title,
                Salle = courseDateDto.Salle,
                ProfessorID = courseDateDto.ProfessorID,
                Description = courseDateDto.Title,
                DateStart = start,
                DateEnd = end,
                TrainingID = courseDateDto.TrainingID,
                ModuleID = courseDateDto.ModuleID,
                SubjectID = courseDateDto.SubjectID,
                Type = courseDateDto.Title,
            };
            _context.CourseDate.Add(@courseDate);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCourseDate", new { id = courseDate.ID }, courseDate);
        }

        // DELETE: api/CourseDate/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourseDate(int id)
        {
            var courseDate = await _context.CourseDate.FindAsync(id);
            if (courseDate == null)
            {
                return NotFound();
            }

            _context.CourseDate.Remove(courseDate);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // Count : api/User/count
        [HttpGet("count")]
        public async Task<ActionResult<int>> Count(){
            var number =  await _context.CourseDate.CountAsync();
            return number;
        }

        private bool CourseDateExists(int id)
        {
            return _context.CourseDate.Any(e => e.ID == id);
        }
    }
}
