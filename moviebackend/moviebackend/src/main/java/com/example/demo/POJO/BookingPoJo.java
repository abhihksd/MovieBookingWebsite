package com.example.demo.POJO;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.SecondaryRow;

import java.util.List;

@Getter
@Setter
public class BookingPoJo {
    private int show_id;
    private int login_id;
    private List<Integer> seats;

}
