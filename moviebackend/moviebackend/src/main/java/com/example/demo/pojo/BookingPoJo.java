package com.example.demo.pojo;

import java.util.List;
import org.hibernate.annotations.SecondaryRow;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class BookingPoJo {
	
	private int show_id;
    private int login_id;
    private List<Integer> seats;
}
