package com.example.demo.controllers;


import com.example.demo.POJO.BookingPoJo;
<<<<<<< HEAD:backend/src/main/java/com/example/demo/controllers/BookingController.java
import com.example.demo.POJO.TicketInfoPoJo;
import com.example.demo.entities.Booking;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Movie;
import com.example.demo.entities.Show;
import com.example.demo.entities.Theater;
import com.example.demo.entities.Ticket;
import com.example.demo.repositories.TicketRepository;
import com.example.demo.services.BookingService;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.ShowService;
import com.example.demo.services.TheaterService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
=======
import com.example.demo.entities.Booking;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.services.BookingService;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

>>>>>>> AbhishekS:moviebackend/moviebackend/src/main/java/com/example/demo/controllers/BookingController.java
import java.util.List;

@CrossOrigin(origins="http://localhost:3000",exposedHeaders = "**")
@RestController
public class BookingController {

<<<<<<< HEAD:backend/src/main/java/com/example/demo/controllers/BookingController.java
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

	    @Autowired
	    private TicketRepository ticketRepo;
=======
    @Autowired
    private BookingService bservice;

    @Autowired
    private CustomerService cservice;

    @Autowired
    private LoginService lservice;

>>>>>>> AbhishekS:moviebackend/moviebackend/src/main/java/com/example/demo/controllers/BookingController.java
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
<<<<<<< HEAD:backend/src/main/java/com/example/demo/controllers/BookingController.java
    @GetMapping("/getRegisteredSeats/{showId}")
    public List<Integer> getRegisteredSeats(@PathVariable Integer showId) {
        return bservice.getSeatNumbersByShowId(showId);
    }
//    @GetMapping("/showDetails")
//    public TicketInfoPoJo example(@RequestParam("show_id") int showId, @RequestParam("login_id") int loginId) {
//
//        Show show = sservice.getShowByShowId(showId);
//       Movie movie = show.getMovie();
//       Login login = lservice.getLoginById(loginId);
//       Customer customer = cservice.getCustomerByLogin(login);
//
//       List<Integer> seat_numbers = new ArrayList<Integer>();
//
//       Theater theater = sservice.getTheaterByShowId(show.getShow_id());
//
//        String movie_name = movie.getTitle();
//        LocalDate show_date = show.getShow_date();
//        LocalTime show_time = show.getShow_time();
//        String theater_name = theater.getTheater_name();
//
//        seat_numbers = bservice.getSNumsCustomer(customer);
//
//        TicketInfoPoJo ticketInfoPojo = new TicketInfoPoJo(movie_name,theater_name, show_date, show_time, seat_numbers);
//        return ticketInfoPojo;
//
//
//    }
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

        seat_numbers = bservice.getSNumsCustomer(customer,show.getShow_id());
        int no_of_seats = seat_numbers.size();

        TicketInfoPoJo ticketInfoPojo = new TicketInfoPoJo(movie_name,theater_name, show_date, show_time, seat_numbers);

        Ticket ticket = new Ticket(customer,movie,theater,show,no_of_seats,no_of_seats*200);
        int user_id = customer.getUser_id();
        int movie_id = movie.getMovie_id();
        int show_id = show.getShow_id();
        int theater_id = theater.getTheater_id();
        System.out.println(("@@@@@@@@@@@@@@@"+user_id+"  "+movie_id));

        Ticket ticketcheck = ticketRepo.existsByCustomerAndMovie(user_id,movie_id,show_id,theater_id);
        System.out.println(ticketcheck);


        if(ticketcheck == null) {
            Ticket saveTicket = ticketRepo.save(ticket);
        }
        return ticketInfoPojo;

    }

=======
>>>>>>> AbhishekS:moviebackend/moviebackend/src/main/java/com/example/demo/controllers/BookingController.java
}
