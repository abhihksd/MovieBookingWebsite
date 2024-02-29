package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="booking")
public class Booking {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    int booking_id;
    @ManyToOne
    @JoinColumn(name="user_id")

    Customer customer;
    @Column
    int show_id;
    @Column
    int amount;

    @Column
    int status;

    @Column
    int seat_number;

    public Booking(Customer customer, int show_id, int amount, int status, int seat_number) {
        this.customer = customer;
        this.show_id = show_id;
        this.amount = amount;
        this.status = status;
        this.seat_number = seat_number;
    }
}
