package com.example.demo.POJO;

import com.example.demo.entities.Login;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TheaterPoJo {
    String name;
    String email;
    String phone_number;
    String address;
    String userType;
    String username;
    String password;
    String licenseNumber;
    String theater_name;
    int total_seats;
    String theater_location;
}
