package com.example.demo.pojo;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShowPoJo {
	private int movie_id;
    private int theater_id;
    private LocalDate showDate;
    private LocalTime showTime;

}
