package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Movie;
@Repository
public interface FetchMovieRepository extends JpaRepository<Movie, Integer> {
	
	@Query("SELECT m FROM Movie m JOIN m.theater t WHERE t.theater_location = :city")
    List<Movie> findAllByTheaterLocation(@Param("city") String city);
	
}
