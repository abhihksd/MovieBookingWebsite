package com.example.demo.repositories;


import com.example.demo.entities.Theater;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entities.Movie;

import jakarta.persistence.Table;
import jakarta.transaction.Transactional;


import java.util.List;
import java.util.Set;
@Transactional
@Repository
//@Table(name="movie")
public interface MovieRepository extends JpaRepository<Movie, Integer> {
	
//  @Query("select m from Movie m, Theater t where m.theater_id = t.theater_id and t.login_id = :loginId")
//  List<Movie> findByTheaterLogin_id(Login loginId);

  @Query("select m from Movie m where m.theater = :theater")
  List<Movie> getMoviesByTheater(Theater theater);

  	@Modifying
  	@Query("update Movie set image = :image where movie_id =:id")
	public int uploadImage(int id , byte[] image) ;
  	
  	
}
