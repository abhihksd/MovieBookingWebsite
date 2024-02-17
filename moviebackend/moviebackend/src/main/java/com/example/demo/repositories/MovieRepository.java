package com.example.demo.repositories;

import com.example.demo.entities.Login;
import com.example.demo.entities.Theater;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Movie;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {

//    @Query("select m from Movie m, Theater t where m.theater_id = t.theater_id and t.login_id = :loginId")
//    List<Movie> findByTheaterLogin_id(Login loginId);

    @Query("select m from Movie m where m.theater = :theater")
    List<Movie> getMoviesByTheater(Theater theater);

}
