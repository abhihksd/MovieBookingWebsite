using System;
using System.Collections.Generic;

namespace ScheduleBackendDotNet.Models
{
    public partial class Theater
    {
        public Theater()
        {
            Movies = new HashSet<Movie>();
            Screens = new HashSet<Screen>();
            Shows = new HashSet<Show>();
            TheaterSeats = new HashSet<TheaterSeat>();
        }

        public int TheaterId { get; set; }
        public string? TheaterName { get; set; }
        public string? TheaterLocation { get; set; }
        public int? TotalSeats { get; set; }
        public int? LoginId { get; set; }
        public sbyte? TheaterStatus { get; set; }
        public string? OwnerName { get; set; }
        public string? LicenceNo { get; set; }
        public string? Email { get; set; }
        public string? PhoneNo { get; set; }
        public string? Address { get; set; }

        public virtual Login? Login { get; set; }
        public virtual ICollection<Movie> Movies { get; set; }
        public virtual ICollection<Screen> Screens { get; set; }
        public virtual ICollection<Show> Shows { get; set; }
        public virtual ICollection<TheaterSeat> TheaterSeats { get; set; }
    }
}
