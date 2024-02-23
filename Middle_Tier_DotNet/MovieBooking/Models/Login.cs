using System;
using System.Collections.Generic;

namespace MovieBooking.Models
{
    public partial class Login
    {
        public Login()
        {
            SystemAdmins = new HashSet<SystemAdmin>();
            Theaters = new HashSet<Theater>();
            Tickets = new HashSet<Ticket>();
        }

        public int LoginId { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }
        public int? RoleId { get; set; }

        public virtual Role? Role { get; set; }
        public virtual User? User { get; set; }
        public virtual ICollection<SystemAdmin> SystemAdmins { get; set; }
        public virtual ICollection<Theater> Theaters { get; set; }
        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
