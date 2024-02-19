package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;
import com.example.demo.entities.Theater;

@Repository
public interface TheaterRepository extends JpaRepository<Theater, Integer> {
	
	  @Query("select t from Theater t where t.login=:login")
	    public Theater getTheaterByLogin(Login login);
	    @Query("SELECT t FROM Theater t WHERE t.theater_status = 0")
	    List<Theater> findTheatersWithStatusZero();
	
}
