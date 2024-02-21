package com.example.demo.services;

import com.example.demo.entities.Movie;
import com.example.demo.entities.Show;
import com.example.demo.entities.Theater;
import com.example.demo.repositories.MovieRepository;
import com.example.demo.repositories.ShowRepository;
import com.example.demo.repositories.TheaterRepository;

import jakarta.transaction.Transactional;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShowService {

    @Autowired
    ShowRepository srepo;

    @Autowired
    private MovieRepository movieRepository;
    
    @Autowired
    private TheaterRepository theaterRepository;
    public Show saveShow(Show s)
    {
        return srepo.save(s);
    }
    
    @Transactional
    public void addShow(int movieId, int theaterId, LocalDate showDate, LocalTime showTime) {
        // Fetch movie and theater objects from their repositories using IDs
    	System.out.println("The movieid and theaterid sent are: "+movieId+" "+theaterId);
        Optional<Movie> movieOptional = movieRepository.findById(movieId);
        Optional<Theater> theaterOptional = theaterRepository.findById(theaterId);
        
        // Check if both movie and theater exist
        if (movieOptional.isPresent() && theaterOptional.isPresent()) {
            Movie movie = movieOptional.get();
            Theater theater = theaterOptional.get();
            
            // Create a new Show object and set its attributes
            Show show = new Show();
            show.setMovie(movie);
            show.setTheater(theater);
            show.setShow_date(showDate);
            show.setShow_time(showTime);
            
            // Save the Show object
            srepo.save(show);
        } else {
            // Handle the case where either the movie or the theater does not exist
            throw new IllegalArgumentException("Movie or theater not found for the provided IDs");
        }
    }
}
