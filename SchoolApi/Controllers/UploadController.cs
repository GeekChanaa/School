using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolApi.Data;
using SchoolApi.Models;
using System.IO;
using System.Net.Http.Headers;



namespace SchoolApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase {
        [HttpPost, DisableRequestSizeLimit]
        public IActionResult Upload(){
            try
            {
                var file = Request.Form.Files[0];
                var foldername = Path.Combine("Resources","Images");
                var PathToSave = Path.Combine(Directory.GetCurrentDirectory(), foldername);

                if(file.Length > 0){
                    var filename = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(PathToSave, filename);
                    var dbPath = Path.Combine(foldername,filename);

                    using( var stream = new FileStream(fullPath,FileMode.Create)){
                        file.CopyTo(stream);
                    }

                    return Ok(new {dbPath});
                }
                else{
                    return BadRequest();
                }
                
            }
            catch(Exception ex){
                return StatusCode(500,$"Internal Server Error : {ex}");
            }
        }
    }
}