package com.example.demo.controllers;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Booking;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Movie;
import com.example.demo.entities.Show;
import com.example.demo.entities.Theater;
import com.example.demo.pojo.BookingPoJo;
import com.example.demo.pojo.TicketInfoPoJo;
import com.example.demo.services.BookingService;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.ShowService;
import com.example.demo.services.TheaterService;

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
        String show_time = show.getShow_time();
        String theater_name = theater.getTheater_name();

        seat_numbers = bservice.getSNumsCustomer(customer);

        TicketInfoPoJo ticketInfoPojo = new TicketInfoPoJo(movie_name,theater_name, show_date, show_time, seat_numbers);
        return ticketInfoPojo;


    }
	

}
