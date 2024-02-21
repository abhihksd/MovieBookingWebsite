using System;
using System.Collections.Generic;

namespace MovieBooking.Models
{
    public partial class Show
    {
        public Show()
        {
            Bookings = new HashSet<Booking>();
        }

        public int ShowId { get; set; }
        public int? MovieId { get; set; }
        public int? TheaterId { get; set; }
        public DateOnly? ShowDate { get; set; }
        public TimeOnly? ShowTime { get; set; }

        public virtual Movie? Movie { get; set; }
        public virtual Theater? Theater { get; set; }
        public virtual ICollection<Booking> Bookings { get; set; }
    }
}
