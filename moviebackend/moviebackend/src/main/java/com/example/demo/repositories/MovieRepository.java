package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Movie;
import com.example.demo.entities.Theater;

import jakarta.transaction.Transactional;
@Transactional
@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {
	
	//  @Query("select m from Movie m, Theater t where m.theater_id = t.theater_id and t.login_id = :loginId")
//  List<Movie> findByTheaterLogin_id(Login loginId);

	@Query("select m from Movie m where m.movie_id=:mid")
	Movie getMovieByMid(int mid);
  @Query("select m from Movie m where m.theater = :theater")
  List<Movie> getMoviesByTheater(Theater theater);

  	@Modifying
  	@Query("update Movie set image = :image where movie_id =:id")
	public int uploadImage(int id , byte[] image) ;
}