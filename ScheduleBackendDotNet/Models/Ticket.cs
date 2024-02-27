using System;
using System.Collections.Generic;

namespace ScheduleBackendDotNet.Models
{
    public partial class Ticket
    {
        public int TicketId { get; set; }
        public int? BookingId { get; set; }
        public int? SeatId { get; set; }
        public decimal? TicketPrice { get; set; }
        public string? SeatNumber { get; set; }
        public int? LoginId { get; set; }
    }
}
