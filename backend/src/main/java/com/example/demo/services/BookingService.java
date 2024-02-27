package com.example.demo.services;

import com.example.demo.entities.Booking;
<<<<<<< HEAD:backend/src/main/java/com/example/demo/services/BookingService.java
import com.example.demo.entities.Customer;
=======
>>>>>>> AbhishekS:moviebackend/moviebackend/src/main/java/com/example/demo/services/BookingService.java
import com.example.demo.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.print.Book;
<<<<<<< HEAD:backend/src/main/java/com/example/demo/services/BookingService.java
import java.util.List;
=======
>>>>>>> AbhishekS:moviebackend/moviebackend/src/main/java/com/example/demo/services/BookingService.java

@Service
public class BookingService {
    @Autowired
    private BookingRepository brepo;

    public Booking saveBooking(Booking b){return brepo.save(b);}
<<<<<<< HEAD:backend/src/main/java/com/example/demo/services/BookingService.java
    
    public List<Integer> getSeatNumbersByShowId(Integer showId) {
        return brepo.findSeatNumbersByShowId(showId);
    }
//    public List<Integer> getSNumsCustomer(Customer customer) {
//        return brepo.getSNumsCustomer(customer);
//    }
    public List<Integer> getSNumsCustomer(Customer customer, int show_id) {
        return brepo.getSNumsCustomer(customer,show_id);
    }
    
=======
>>>>>>> AbhishekS:moviebackend/moviebackend/src/main/java/com/example/demo/services/BookingService.java
}
