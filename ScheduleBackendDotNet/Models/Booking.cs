using System;
using System.Collections.Generic;

namespace ScheduleBackendDotNet.Models
{
    public partial class Booking
    {
        public int BookingId { get; set; }
        public int? UserId { get; set; }
        public int? ShowId { get; set; }
        public decimal? Amount { get; set; }
        public sbyte? Status { get; set; }
        public int? SeatNumber { get; set; }

        public virtual Show? Show { get; set; }
        public virtual User? User { get; set; }
    }
}
