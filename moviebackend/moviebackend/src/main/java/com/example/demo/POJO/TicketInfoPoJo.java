package com.example.demo.POJO;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Getter
@Setter
public class TicketInfoPoJo {
    String movie_name;
    String theater_name;
    LocalDate show_date;
    LocalTime show_time;
    List<Integer> seat_numbers;

    public TicketInfoPoJo(String movie_name, String theater_name, LocalDate show_date, LocalTime show_time, List<Integer> seat_numbers) {
        this.movie_name = movie_name;
        this.theater_name = theater_name;
        this.show_date = show_date;
        this.show_time = show_time;

        this.seat_numbers = seat_numbers;
    }
}
