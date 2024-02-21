package com.example.demo.controllers;

import com.example.demo.entities.Theater;
import com.example.demo.services.TheaterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Movie;
import com.example.demo.entities.Show;
import com.example.demo.services.MovieService;
import com.example.demo.services.ShowService;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ShowController {

    @Autowired
    private ShowService sservice;

    @Autowired
    private MovieService mservice;

    @Autowired
    private TheaterService tservice;


    @GetMapping("/getShowTimingsByTheaterAndMovie/{theaterId}/{movieId}")
    public List<Show> getShowTimingsByTheaterAndMovie(@PathVariable int theaterId, @PathVariable int movieId) {

        Theater theater = tservice.getTheaterByTheaterId(theaterId);
        Movie movie = mservice.getMovieByMid(movieId);
        return sservice.getShowTimingsByTheaterAndMovie(theater, movie);
    }


}