package com.example.demo.controllers;

import com.example.demo.entities.Theater;
import com.example.demo.services.TheaterService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Movie;
import com.example.demo.services.MovieService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class MovieController {

	@Autowired
	private TheaterService tservice;

	@Autowired
	private MovieService mservice;

	@PostMapping("/addMovie")
	public Movie addMovie(@RequestBody Movie mr, HttpServletRequest request)
	{
		//how to get theater id here
//		Theater theater = tservice.getTheaterByTheaterId(request.theater_id).get(); //it returns Optional so write get()
//		Movie m = new Movie(mr.getTitle(),mr.getDirector(),mr.getRelease_date(),mr.getGenre(),mr.getDuration(),mr.getLanguage(),mr.getDescription(),theater);
//		return mservice.saveMovie(m);
		return  new Movie();
	}
	@PutMapping("/editmovie/{id}")
	public ResponseEntity<Movie> updateMovie(@PathVariable Integer id,@RequestBody Movie updatedMovie)
	{
		Movie movie=mservice.updateMovie(id, updatedMovie);
		return ResponseEntity.ok().body(movie);
	}
}
