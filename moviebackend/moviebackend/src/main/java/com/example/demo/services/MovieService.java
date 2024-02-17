package com.example.demo.services;

import com.example.demo.entities.Login;
import com.example.demo.entities.Theater;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Movie;
import com.example.demo.repositories.MovieRepository;

import java.util.List;

@Service
public class MovieService {

	@Autowired
	private MovieRepository mrepo;

	public Movie saveMovie(Movie m)
	{
		return mrepo.save(m);
	}

//	public List<Movie> getMoviesByTheaterLogin_id(Login loginId) {
//		return mrepo.findByTheaterLogin_id(loginId);
//	}


	public List<Movie> moviesByTheaterId(int theaterId) {
		return mrepo.getMoviesByTheaterId(theaterId);
	}
}
