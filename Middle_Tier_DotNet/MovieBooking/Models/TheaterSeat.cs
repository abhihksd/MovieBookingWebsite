using System;
using System.Collections.Generic;

namespace MovieBooking.Models
{
    public partial class TheaterSeat
    {
        public TheaterSeat()
        {
            Tickets = new HashSet<Ticket>();
        }

        public int SeatId { get; set; }
        public int? TheaterId { get; set; }
        public string? SeatNumber { get; set; }
        public string? SeatType { get; set; }
        public bool? Availability { get; set; }
        public string? City { get; set; }

        public virtual Theater? Theater { get; set; }
        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
