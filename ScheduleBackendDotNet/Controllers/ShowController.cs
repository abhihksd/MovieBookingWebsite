using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ScheduleBackendDotNet.Models;
using System.Linq;

namespace ScheduleBackendDotNet.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors]

    public class BookingCount
    {
        public int ShowId { get; set; }
        public int Count { get; set; }
    }
    public class ShowController : ControllerBase
    {
    
        
        //public List<int> getAllShows(int theater_id)
        //{
        //    List<int> shows_list = new List<int>();
        //    using (var db = new moviesContext())
        //    {
        //        shows_list = db.Shows.Where(l=>l.TheaterId==theater_id).Select(l=>l.ShowId).ToList();
                    
        //    }
            //List<int> book_list= new List<int>();
            //var book_list=new List<BookingCount>();
            //using (var db=new moviesContext())
            //{
            //     book_list = db.Bookings
            //          .Where(b => shows_list.Contains((int)b.ShowId))
            //          .GroupBy(b => b.ShowId)
            //          .Select(g => new { ShowId = g.Key, Count = g.Count() })
            //          .ToList();


            //}
            //return book_list;

        
    }
}
