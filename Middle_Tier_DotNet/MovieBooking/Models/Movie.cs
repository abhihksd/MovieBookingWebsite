using System;
using System.Collections.Generic;

namespace MovieBooking.Models
{
    public partial class Movie
    {
        public Movie()
        {
            Shows = new HashSet<Show>();
        }

        public int MovieId { get; set; }
        public string? Title { get; set; }
        public string? Director { get; set; }
        public DateOnly? ReleaseDate { get; set; }
        public string? Genre { get; set; }
        public int? Duration { get; set; }
        public string? Language { get; set; }
        public string? Description { get; set; }
        public int? TheaterId { get; set; }

        public virtual Theater? Theater { get; set; }
        public virtual ICollection<Show> Shows { get; set; }
    }
}
