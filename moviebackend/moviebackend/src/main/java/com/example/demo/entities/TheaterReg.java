package com.example.demo.entities;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TheaterReg {
    String theater_name;
    String location;
    int total_seats;
    int screens_count;
    Login login_id;
}
