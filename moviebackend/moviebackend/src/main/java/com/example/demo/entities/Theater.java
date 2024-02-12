package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "theater")
public class Theater {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    int theater_id;
    String theater_name;
    String location;
    int total_seats;
    int screens_count;
    Login login_id;

    public Theater(String theater_name,String location,int total_seats, int screens_count,Login login_id){
        this.theater_name = theater_name;
        this.location = location;
        this.total_seats = total_seats;
        this.screens_count = screens_count;
        this.login_id = login_id;

    }


}

