package com.example.demo.POJO;

import com.example.demo.entities.Login;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TheaterPoJo {

    String theater_name;

    String location;

    int total_seats;

    Login login_id;

    String username;

    String password;
}
