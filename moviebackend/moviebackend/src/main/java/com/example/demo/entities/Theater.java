package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="theater")
public class Theater {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int theater_id;
    @Column
    String theater_name;
    @Column
    String location;
    @Column
    int total_seats;

    @OneToOne
    @JoinColumn(name = "login_id")
    Login login_id;

    public Theater(String theater_name, String location, int total_seats, Login login_id) {
        this.theater_name = theater_name;
        this.location = location;
        this.total_seats = total_seats;

        this.login_id = login_id;
    }
}
