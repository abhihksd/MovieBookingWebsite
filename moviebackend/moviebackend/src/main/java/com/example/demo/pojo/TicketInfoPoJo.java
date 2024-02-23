package com.example.demo.pojo;

import java.time.LocalDate;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TicketInfoPoJo {
	
	String movie_name;
    String theater_name;
    LocalDate show_date;
    String show_time;
    List<Integer> seat_numbers;

    public TicketInfoPoJo(String movie_name, String theater_name, LocalDate show_date, String show_time, List<Integer> seat_numbers) {
        this.movie_name = movie_name;
        this.theater_name = theater_name;
        this.show_date = show_date;
        this.show_time = show_time;

        this.seat_numbers = seat_numbers;
    }

}
