package com.example.demo.controllers;


import com.example.demo.POJO.BookingPoJo;
import com.example.demo.POJO.TicketInfoPoJo;
import com.example.demo.entities.*;
import com.example.demo.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins="http://localhost:3000",exposedHeaders = "**")
@RestController
public class BookingController {

    @Autowired
    private BookingService bservice;

    @Autowired
    private TheaterService tservice;

    @Autowired
    private ShowService sservice;
    @Autowired
    private CustomerService cservice;

    @Autowired
    private LoginService lservice;

    @PostMapping("/registerSeats")
    public String saveBooking(@RequestBody BookingPoJo bj){

        Login l = lservice.getLoginById(bj.getLogin_id());
        Customer customer = cservice.getCustomerByLogin(l);


        List<Integer> list = bj.getSeats();
        //Booking booking = new Booking();

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

    @GetMapping("/showDetails")
    public TicketInfoPoJo example(@RequestParam("show_id") int showId, @RequestParam("login_id") int loginId) {

        Show show = sservice.getShowByShowId(showId);
       Movie movie = show.getMovie();
       Login login = lservice.getLoginById(loginId);
       Customer customer = cservice.getCustomerByLogin(login);

       List<Integer> seat_numbers = new ArrayList<Integer>();

       Theater theater = sservice.getTheaterByShowId(show.getShow_id());

        String movie_name = movie.getTitle();
        LocalDate show_date = show.getShow_date();
        LocalTime show_time = show.getShow_time();
        String theater_name = theater.getTheater_name();

        seat_numbers = bservice.getSNumsCustomer(customer);

        TicketInfoPoJo ticketInfoPojo = new TicketInfoPoJo(movie_name,theater_name, show_date, show_time, seat_numbers);
        return ticketInfoPojo;


    }

}
