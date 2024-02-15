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
    String theater_location;
    @Column
    int total_seats;

    @OneToOne
    @JoinColumn(name = "login_id")
    Login login_id;

    @Column
    int admin_status;
    @Column
    String owner_name;

    @Column
    String licence_no;

    @Column
    String email;
    @Column
    String phone_no;
    @Column
    String address;

    public Theater(String theater_name, String theater_location, int total_seats, Login login_id, String owner_name, String licence_no, String email, String phone_no, String address) {
        this.theater_name = theater_name;
        this.theater_location = theater_location;
        this.total_seats = total_seats;
        this.login_id = login_id;
        this.owner_name = owner_name;
        this.licence_no = licence_no;
        this.email = email;
        this.phone_no = phone_no;
        this.address = address;
    }
}
