package com.example.demo.entities;


import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="shows")
public class Show {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    int show_id;

    @JsonFormat(pattern="yyyy-MM-dd")
    @Column
    Date show_date;

    @JsonFormat(pattern="HH:mm:ss")
    @Column
    LocalTime show_time;

    @ManyToOne
    @JoinColumn(name="movie_id")
    Movie movie;

    @ManyToOne
    @JoinColumn(name="theater_id")
    Theater theater;

    public Show(Date show_date, LocalTime show_time, Movie movie, Theater theater) {
        super();
        this.show_date = show_date;
        this.show_time = show_time;
        this.movie = movie;
        this.theater = theater;
    }



}