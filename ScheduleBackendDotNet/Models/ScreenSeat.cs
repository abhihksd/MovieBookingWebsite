using System;
using System.Collections.Generic;

namespace ScheduleBackendDotNet.Models
{
    public partial class ScreenSeat
    {
        public int SeatId { get; set; }
        public int? ScreenId { get; set; }
        public string? SeatNumber { get; set; }
        public string? SeatType { get; set; }
        public bool? Availability { get; set; }

        public virtual Screen? Screen { get; set; }
    }
}
