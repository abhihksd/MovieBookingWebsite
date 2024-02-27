package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    @GetMapping("/getAllMovies/{city}")
    public List<Movie> getAllMovies(@PathVariable("city") String city){
    	return fmservice.getAllMoviesByTheaterLocation(city);
    	
    }
<<<<<<< HEAD:backend/moviebackend/src/main/java/com/example/demo/controllers/FetchMovieController.java
    @GetMapping("/getMovieById/{id}")
    public Movie getMovie(@PathVariable("id") int id){
        return fmservice.getMovieById(id);
    }
=======
>>>>>>> AbhishekS:moviebackend/moviebackend/src/main/java/com/example/demo/controllers/FetchMovieController.java

}
