package com.example.demo.controllers;


import com.example.demo.POJO.BookingPoJo;
import com.example.demo.entities.Booking;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.services.BookingService;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000",exposedHeaders = "**")
@RestController
public class BookingController {

    @Autowired
    private BookingService bservice;

    @Autowired
    private CustomerService cservice;

    @Autowired
    private LoginService lservice;

    @PostMapping("/registerSeats")
    public String saveBooking(@RequestBody BookingPoJo bj){

        Login l = lservice.getLoginById(bj.getLogin_id());
        Customer customer = cservice.getCustomerByLogin(l);


        List<Integer> list = bj.getSeats();
//        Booking booking = new Booking();

        for(Integer i:list){
            Booking booking = new Booking(customer,bj.getShow_id(),200,1,i);
            Booking saved = bservice.saveBooking(booking);
        }
        return "success";

    }

    @GetMapping("/getRegisteredSeats/{showId}")
    public List<Integer> getRegisteredSeats(@PathVariable Integer showId) {
        return bservice.getSeatNumbersByShowId(showId);
    }
}
