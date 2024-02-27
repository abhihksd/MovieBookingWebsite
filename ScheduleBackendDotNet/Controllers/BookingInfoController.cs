using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using ScheduleBackendDotNet.Models;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace ScheduleBackendDotNet.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors]
    public class BookingInfoController : ControllerBase
    {
        [HttpGet]
        public List<Booking> GetInfo()
        {

            List<Booking> list = new List<Booking>();
            using (var db = new moviesContext())
            {
                list = db.Bookings.ToList();
            }
            return list;
        }
        [HttpGet]
        public List<Movie> GetMovie(int login_id)
        {
            
            List<Movie> list = new List<Movie>();

            using(var db = new moviesContext())
            {
                Theater theater = db.Theaters.FirstOrDefault(t => t.LoginId == login_id);

                if (theater != null)
                {
                    // If theater is found, retrieve its TheaterId
                    int theaterId = theater.TheaterId;

                    list = db.Movies
                   .Where(m => m.TheaterId == theaterId)
                   .Select(m => new Movie { MovieId = m.MovieId, Title = m.Title })
                   .ToList();
                }
            }
                        
            return list;
            
        }
        [HttpGet]
        public List<Show> GetShows(int movie_id)
        {
            List<Show> list = new List<Show>();
            using (var db = new moviesContext())
            {
               list= db.Shows.Where(s => s.MovieId == movie_id).ToList();
            }
            return list;
        }

    }


}
