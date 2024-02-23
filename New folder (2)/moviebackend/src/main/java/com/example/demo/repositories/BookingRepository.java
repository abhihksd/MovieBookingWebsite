package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Booking;
import com.example.demo.entities.Customer;

public interface BookingRepository extends JpaRepository<Booking, Integer> {

	
	 @Query("select b.seat_number from Booking b where b.show_id=:showId")
	    List<Integer> findSeatNumbersByShowId(Integer showId);

	 @Query("select b.seat_number from Booking b where b.customer=:customer and b.show_id=:show_id")
	    List<Integer> getSNumsCustomer(Customer customer, int show_id);
}
