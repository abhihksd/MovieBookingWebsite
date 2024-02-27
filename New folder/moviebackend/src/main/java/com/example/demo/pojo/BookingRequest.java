package com.example.demo.pojo;

import java.sql.Date;
import java.util.List;

public class BookingRequest {
int showId;
int userId;
List<Integer> seatIds;
Date bookingDate;
Double amount;
String status;
}
