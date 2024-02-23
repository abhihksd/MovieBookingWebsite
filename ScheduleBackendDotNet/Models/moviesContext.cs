using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ScheduleBackendDotNet.Models
{
    public partial class moviesContext : DbContext
    {
        public moviesContext()
        {
        }

        public moviesContext(DbContextOptions<moviesContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Booking> Bookings { get; set; } = null!;
        public virtual DbSet<Login> Logins { get; set; } = null!;
        public virtual DbSet<Movie> Movies { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Screen> Screens { get; set; } = null!;
        public virtual DbSet<ScreenSeat> ScreenSeats { get; set; } = null!;
        public virtual DbSet<Show> Shows { get; set; } = null!;
        public virtual DbSet<SystemAdmin> SystemAdmins { get; set; } = null!;
        public virtual DbSet<Theater> Theaters { get; set; } = null!;
        public virtual DbSet<TheaterSeat> TheaterSeats { get; set; } = null!;
        public virtual DbSet<Ticket> Tickets { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=movies", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Booking>(entity =>
            {
                entity.ToTable("booking");

                entity.HasIndex(e => e.UserId, "customer_id");

                entity.HasIndex(e => e.ShowId, "show_id");

                entity.Property(e => e.BookingId).HasColumnName("booking_id");

                entity.Property(e => e.Amount)
                    .HasPrecision(10, 2)
                    .HasColumnName("amount");

                entity.Property(e => e.SeatNumber).HasColumnName("seat_number");

                entity.Property(e => e.ShowId).HasColumnName("show_id");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Show)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.ShowId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("booking_ibfk_2");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("booking_ibfk_1");
            });

            modelBuilder.Entity<Login>(entity =>
            {
                entity.ToTable("login");

                entity.HasIndex(e => e.RoleId, "role_id_fky_idx");

                entity.Property(e => e.LoginId).HasColumnName("login_id");

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .HasColumnName("password");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.Username)
                    .HasMaxLength(50)
                    .HasColumnName("username");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Logins)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("role_id_fky");
            });

            modelBuilder.Entity<Movie>(entity =>
            {
                entity.ToTable("movies");

                entity.HasIndex(e => e.TheaterId, "theater_id_fk_idx");

                entity.Property(e => e.MovieId).HasColumnName("movie_id");

                entity.Property(e => e.Description)
                    .HasMaxLength(450)
                    .HasColumnName("description");

                entity.Property(e => e.Director)
                    .HasMaxLength(100)
                    .HasColumnName("director");

                entity.Property(e => e.Duration).HasColumnName("duration");

                entity.Property(e => e.Genre)
                    .HasMaxLength(100)
                    .HasColumnName("genre");

                entity.Property(e => e.Image).HasColumnName("image");

                entity.Property(e => e.Language)
                    .HasMaxLength(50)
                    .HasColumnName("language");

                entity.Property(e => e.ReleaseDate).HasColumnName("release_date");

                entity.Property(e => e.TheaterId).HasColumnName("theater_id");

                entity.Property(e => e.Title)
                    .HasMaxLength(255)
                    .HasColumnName("title");

                entity.HasOne(d => d.Theater)
                    .WithMany(p => p.Movies)
                    .HasForeignKey(d => d.TheaterId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("theater_id_fk");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("role");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.RoleName)
                    .HasMaxLength(50)
                    .HasColumnName("role_name");
            });

            modelBuilder.Entity<Screen>(entity =>
            {
                entity.ToTable("screens");

                entity.HasIndex(e => e.TheaterId, "fk_theater_id_idx");

                entity.Property(e => e.ScreenId)
                    .ValueGeneratedNever()
                    .HasColumnName("screen_id");

                entity.Property(e => e.NoSeats).HasColumnName("no_seats");

                entity.Property(e => e.TheaterId).HasColumnName("theater_id");

                entity.HasOne(d => d.Theater)
                    .WithMany(p => p.Screens)
                    .HasForeignKey(d => d.TheaterId)
                    .HasConstraintName("fk_theater_id");
            });

            modelBuilder.Entity<ScreenSeat>(entity =>
            {
                entity.HasKey(e => e.SeatId)
                    .HasName("PRIMARY");

                entity.ToTable("screen_seats");

                entity.HasIndex(e => e.ScreenId, "theater_id");

                entity.Property(e => e.SeatId).HasColumnName("seat_id");

                entity.Property(e => e.Availability).HasColumnName("availability");

                entity.Property(e => e.ScreenId).HasColumnName("screen_id");

                entity.Property(e => e.SeatNumber)
                    .HasMaxLength(10)
                    .HasColumnName("seat_number");

                entity.Property(e => e.SeatType)
                    .HasMaxLength(50)
                    .HasColumnName("seat_type");

                entity.HasOne(d => d.Screen)
                    .WithMany(p => p.ScreenSeats)
                    .HasForeignKey(d => d.ScreenId)
                    .HasConstraintName("screen_id_fk");
            });

            modelBuilder.Entity<Show>(entity =>
            {
                entity.ToTable("shows");

                entity.HasIndex(e => e.MovieId, "movie_id");

                entity.HasIndex(e => e.TheaterId, "theater_id");

                entity.Property(e => e.ShowId).HasColumnName("show_id");

                entity.Property(e => e.MovieId).HasColumnName("movie_id");

                entity.Property(e => e.ShowDate).HasColumnName("show_date");

                entity.Property(e => e.ShowTime)
                    .HasColumnType("time")
                    .HasColumnName("show_time");

                entity.Property(e => e.TheaterId).HasColumnName("theater_id");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.Shows)
                    .HasForeignKey(d => d.MovieId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("shows_ibfk_1");

                entity.HasOne(d => d.Theater)
                    .WithMany(p => p.Shows)
                    .HasForeignKey(d => d.TheaterId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("shows_ibfk_2");
            });

            modelBuilder.Entity<SystemAdmin>(entity =>
            {
                entity.HasKey(e => e.AdminId)
                    .HasName("PRIMARY");

                entity.ToTable("system_admin");

                entity.HasIndex(e => e.LoginId, "sysadmin_fj_login_idx");

                entity.Property(e => e.AdminId).HasColumnName("admin_id");

                entity.Property(e => e.AdminName)
                    .HasMaxLength(45)
                    .HasColumnName("admin_name");

                entity.Property(e => e.LoginId).HasColumnName("login_id");

                entity.HasOne(d => d.Login)
                    .WithMany(p => p.SystemAdmins)
                    .HasForeignKey(d => d.LoginId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("sysadmin_fj_login");
            });

            modelBuilder.Entity<Theater>(entity =>
            {
                entity.ToTable("theater");

                entity.HasIndex(e => e.LoginId, "login_id_fk_idx");

                entity.Property(e => e.TheaterId).HasColumnName("theater_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(45)
                    .HasColumnName("address");

                entity.Property(e => e.Email)
                    .HasMaxLength(45)
                    .HasColumnName("email");

                entity.Property(e => e.LicenceNo)
                    .HasMaxLength(45)
                    .HasColumnName("licence_no");

                entity.Property(e => e.LoginId).HasColumnName("login_id");

                entity.Property(e => e.OwnerName)
                    .HasMaxLength(50)
                    .HasColumnName("owner_name");

                entity.Property(e => e.PhoneNo)
                    .HasMaxLength(45)
                    .HasColumnName("phone_no");

                entity.Property(e => e.TheaterLocation)
                    .HasMaxLength(255)
                    .HasColumnName("theater_location");

                entity.Property(e => e.TheaterName)
                    .HasMaxLength(100)
                    .HasColumnName("theater_name");

                entity.Property(e => e.TheaterStatus)
                    .HasColumnName("theater_status")
                    .HasDefaultValueSql("'0'");

                entity.Property(e => e.TotalSeats).HasColumnName("total_seats");

                entity.HasOne(d => d.Login)
                    .WithMany(p => p.Theaters)
                    .HasForeignKey(d => d.LoginId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("login_id_fk");
            });

            modelBuilder.Entity<TheaterSeat>(entity =>
            {
                entity.HasKey(e => e.SeatId)
                    .HasName("PRIMARY");

                entity.ToTable("theater_seat");

                entity.HasIndex(e => e.TheaterId, "theater_id");

                entity.Property(e => e.SeatId).HasColumnName("seat_id");

                entity.Property(e => e.Availability).HasColumnName("availability");

                entity.Property(e => e.City)
                    .HasMaxLength(45)
                    .HasColumnName("city");

                entity.Property(e => e.SeatNumber)
                    .HasMaxLength(10)
                    .HasColumnName("seat_number");

                entity.Property(e => e.SeatType)
                    .HasMaxLength(50)
                    .HasColumnName("seat_type");

                entity.Property(e => e.TheaterId).HasColumnName("theater_id");

                entity.HasOne(d => d.Theater)
                    .WithMany(p => p.TheaterSeats)
                    .HasForeignKey(d => d.TheaterId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("theater_seat_ibfk_1");
            });

            modelBuilder.Entity<Ticket>(entity =>
            {
                entity.ToTable("tickets");

                entity.Property(e => e.TicketId).HasColumnName("ticket_id");

                entity.Property(e => e.BookingId).HasColumnName("booking_id");

                entity.Property(e => e.LoginId).HasColumnName("login_id");

                entity.Property(e => e.SeatId).HasColumnName("seat_id");

                entity.Property(e => e.SeatNumber)
                    .HasMaxLength(10)
                    .HasColumnName("seat_number");

                entity.Property(e => e.TicketPrice)
                    .HasPrecision(10, 2)
                    .HasColumnName("ticket_price");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("users");

                entity.HasIndex(e => e.LoginId, "UK_a2b4dq08xcnfceldrq26nt0et")
                    .IsUnique();

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .HasColumnName("address");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .HasColumnName("email");

                entity.Property(e => e.LoginId).HasColumnName("login_id");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .HasColumnName("name");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .HasColumnName("phone_number");

                entity.HasOne(d => d.Login)
                    .WithOne(p => p.User)
                    .HasForeignKey<User>(d => d.LoginId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("login_id_userfk");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
