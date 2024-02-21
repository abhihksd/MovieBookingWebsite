package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Login;
import com.example.demo.entities.Movie;
import com.example.demo.entities.Show;
import com.example.demo.entities.Theater;
import com.example.demo.POJO.MoviePoJo;
import com.example.demo.services.LoginService;
import com.example.demo.services.MovieService;
import com.example.demo.services.ShowService;
import com.example.demo.services.TheaterService;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class MovieController {

	@Autowired
	private LoginService lservice;

	@Autowired
	private MovieService mservice;

	@Autowired
	private TheaterService tservice;

	@Autowired
	private ShowService sservice;

	@PostMapping("/addMovie")
	public Movie addMovie(@RequestBody MoviePoJo mr)
	{
		System.out.println(mr);
		Login l = lservice.getLogin(mr.getUsername(),mr.getPassword());


		Theater t = tservice.getTheaterByLogin(l);


		Movie m1 = new Movie(mr.getTitle(),mr.getDirector(),mr.getRelease_date(),mr.getGenre(),mr.getDescription(),mr.getDuration(),mr.getLanguage(),t,mr.getImage());
		Movie movie = mservice.saveMovie(m1);
		//save movie before passing to show
		Show s = new Show(mr.getShow_date(),mr.getShow_time(),m1,t);
		Show saved = sservice.saveShow(s);

		return movie;
	}

	@GetMapping("/getMovies/{id}")
	public List<Movie> getMoviesByTheaterLoginId(@PathVariable("id") int loginId) {

		Login login = lservice.getLoginById(loginId);


		Theater theater = tservice.getTheaterByLogin(login);


		return mservice.moviesByTheater(theater);
	}

	@DeleteMapping("/deleteMovie/{movie_id}")
	public void deleteMovie(@PathVariable int movie_id) {
		mservice.deleteMovieById(movie_id);

	}

	@PostMapping(value = "/uploadImage/{movie_id}", consumes = "multipart/form-data")
	public boolean uploadImage(@PathVariable("movie_id") int did, @RequestBody MultipartFile file) {


		boolean flag = true;
		try {
			flag = mservice.uploadImage(did, file.getBytes());
		} catch (Exception e) {
			flag = false;
		}
		return flag;
	}




}