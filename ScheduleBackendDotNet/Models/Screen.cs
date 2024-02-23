using System;
using System.Collections.Generic;

namespace ScheduleBackendDotNet.Models
{
    public partial class Screen
    {
        public Screen()
        {
            ScreenSeats = new HashSet<ScreenSeat>();
        }

        public int ScreenId { get; set; }
        public int NoSeats { get; set; }
        public int? TheaterId { get; set; }

        public virtual Theater? Theater { get; set; }
        public virtual ICollection<ScreenSeat> ScreenSeats { get; set; }
    }
}
