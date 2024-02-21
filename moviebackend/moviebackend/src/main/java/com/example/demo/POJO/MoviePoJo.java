package com.example.demo.POJO;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;

import com.example.demo.entities.Theater;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class MoviePoJo {


    String title;
    String director;
    LocalDate release_date;
    LocalDate show_date;
    LocalTime show_time;
    String genre;
    String description;
    int duration;
    String language;

    byte[] image;

    int movie_id;


    String username;
    String password;





}