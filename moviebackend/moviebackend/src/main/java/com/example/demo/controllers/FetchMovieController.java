package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Movie;
import com.example.demo.services.FetchMovieService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/movies")
public class FetchMovieController {

	@Autowired
    private FetchMovieService fmservice;

    @GetMapping("/getAllMovies")
    public List<Movie> getAllMovies(){
    	
        return fmservice.getAllMovies();
    }
}
