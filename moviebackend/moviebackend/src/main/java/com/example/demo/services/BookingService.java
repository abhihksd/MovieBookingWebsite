package com.example.demo.services;

import com.example.demo.entities.Booking;
import com.example.demo.entities.Customer;
import com.example.demo.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.print.Book;
import java.util.List;

@Service
public class BookingService {
    @Autowired
    private BookingRepository brepo;

    public Booking saveBooking(Booking b){return brepo.save(b);}

    public List<Integer> getSeatNumbersByShowId(Integer showId) {
        return brepo.findSeatNumbersByShowId(showId);
    }



    public List<Integer> getSNumsCustomer(Customer customer) {
        return brepo.getSNumsCustomer(customer);
    }
}
