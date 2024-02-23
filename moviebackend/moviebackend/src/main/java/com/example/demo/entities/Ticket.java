package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.java.Log;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "tickets")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int ticket_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    Customer user_id;
    @ManyToOne
    @JoinColumn(name = "movie_id")
    Movie movie_id;

    @ManyToOne
    @JoinColumn(name = "theater_id")
    Theater theater_id;
    @ManyToOne
    @JoinColumn(name = "show_id")
    Show show_id;


    int no_of_seats;
    int total_amount;

    public Ticket(Customer user_id, Movie movie_id, Theater theater_id, Show show_id, int no_of_seats, int total_amount)
    {
        this.user_id = user_id;
        this.movie_id = movie_id;
        this.theater_id = theater_id;
        this.show_id = show_id;
        this.no_of_seats = no_of_seats;
        this.total_amount = total_amount;
    }
}
