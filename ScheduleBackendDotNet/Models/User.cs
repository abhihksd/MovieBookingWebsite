using System;
using System.Collections.Generic;

namespace ScheduleBackendDotNet.Models
{
    public partial class User
    {
        public User()
        {
            Bookings = new HashSet<Booking>();
        }

        public int UserId { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Address { get; set; }
        public int? LoginId { get; set; }

        public virtual Login? Login { get; set; }
        public virtual ICollection<Booking> Bookings { get; set; }
    }
}
