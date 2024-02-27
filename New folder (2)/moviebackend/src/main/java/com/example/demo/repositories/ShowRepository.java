package com.example.demo.repositories;

import com.example.demo.entities.Movie;
import com.example.demo.entities.Show;
import com.example.demo.entities.Theater;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShowRepository extends JpaRepository<Show,Integer> {

    @Query("select s.theater from Show s where s.movie=:movie")
    List<Theater> getTheatersByMovie(Movie movie);

    @Query("select s from Show s where s.theater=:theater and s.movie=:movie")
    List<Show> getShowByTidMid(Theater theater, Movie movie);
    
    @Query("select s from Show s where s.show_id=:showId")
    Show getShowBySid(int showId);

    @Query("select s.theater from Show s where s.show_id=:showId")
    Theater getTheaterByShowId(int showId);
}
