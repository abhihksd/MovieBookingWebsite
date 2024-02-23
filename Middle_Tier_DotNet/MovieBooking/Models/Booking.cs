using System;
using System.Collections.Generic;

namespace MovieBooking.Models
{
    public partial class Booking
    {
        public Booking()
        {
            Tickets = new HashSet<Ticket>();
        }

        public int BookingId { get; set; }
        public int? CustomerId { get; set; }
        public int? ShowId { get; set; }
        public DateOnly? BookingDate { get; set; }
        public decimal? TotalAmount { get; set; }
        public string? Status { get; set; }

        public virtual User? Customer { get; set; }
        public virtual Show? Show { get; set; }
        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
