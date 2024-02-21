package com.example.demo.repositories;


import com.example.demo.entities.Theater;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entities.Movie;

import java.util.List;
import java.util.Set;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {

//    @Query("select m from Movie m, Theater t where m.theater_id = t.theater_id and t.login_id = :loginId")
//    List<Movie> findByTheaterLogin_id(Login loginId);

//    @Query("select m from Movie m where m.theater_id = :theaterId")
//    List<Movie> getMoviesByTheaterId(Integer theaterId);

    
    @Query("select m from Movie m where m.movie_id=:mid")
    Movie getMovieByMid(int mid);

    @Query("select m from Movie m where m.theater=:theater")
    List<Movie> getMoviesByTheater(Theater theater);

    @Modifying
    @Query("update Movie set image = :image where movie_id =:id")
    public int uploadImage(int id , byte[] image) ;



//    @Query("select m.theater_id from Movie m where m.title=:mname" )
//    Set<Integer> getTheatrIdByMName(String mname);

}
