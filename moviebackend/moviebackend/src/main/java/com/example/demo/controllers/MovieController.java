package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Movie;
import com.example.demo.services.MovieService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class MovieController {
	
	@Autowired
	private MovieService mservice;
	
	@PostMapping("/addMovie")
	public Movie addMovie(@RequestBody Movie mr)
	{		
		Movie m = new Movie(mr.getTitle(),mr.getDirector(),mr.getRelease_date(),mr.getGenre(),mr.getDuration(),mr.getLanguage());
		return mservice.saveMovie(m);	
	}
	
}