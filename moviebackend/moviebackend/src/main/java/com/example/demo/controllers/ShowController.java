package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Movie;
import com.example.demo.entities.Show;
import com.example.demo.entities.Theater;
import com.example.demo.pojo.ShowPoJo;
import com.example.demo.services.MovieService;
import com.example.demo.services.ShowService;
import com.example.demo.services.TheaterService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ShowController {

	@Autowired
	private ShowService sservice;
		
	@Autowired
	private MovieService mservice;
	
	@Autowired
	private TheaterService tservice;
	
	
//	  @PostMapping("/add-show")
//	    public ResponseEntity<String> addShow(@RequestBody ShowPoJo show) {
//	    	System.out.println("The ids recieved are: "+show.getMovie_id()+" "+show.getTheater_id()+show.getShowDate()+""+show.getShowTime());
//	    	sservice.addShow(show.getMovie_id(), show.getTheater_id(), show.getShowDate(), show.getShowTime());
//	        return ResponseEntity.ok("Show added successfully");
//	    }



	    @GetMapping("/getShowTimingsByTheaterAndMovie/{theaterId}/{movieId}")
	    public List<Show> getShowTimingsByTheaterAndMovie(@PathVariable int theaterId, @PathVariable int movieId) {

	        Theater theater = tservice.getTheaterByTheaterId(theaterId);
	        Movie movie = mservice.getMovieByMid(movieId);
	        return sservice.getShowTimingsByTheaterAndMovie(theater, movie);
	    }
}
