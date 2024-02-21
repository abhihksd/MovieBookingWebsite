using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieBooking.Models;

namespace MovieBooking.Controllers
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
                list=db.Bookings.ToList();
            }
            return list;
        }

    }
}
