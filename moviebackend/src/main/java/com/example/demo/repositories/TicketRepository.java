package com.example.demo.repositories;

import com.example.demo.entities.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TicketRepository extends JpaRepository<Ticket,Integer> {
    @Query("select t from Ticket t where t.user_id.user_id=:user_id and t.movie_id.movie_id=:movie_id and t.show_id.show_id=:show_id and t.theater_id.theater_id=:theater_id")
    public Ticket existsByCustomerAndMovie(int user_id, int movie_id,int show_id,int theater_id);
}