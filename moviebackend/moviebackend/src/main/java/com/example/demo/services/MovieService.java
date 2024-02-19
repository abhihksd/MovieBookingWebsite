package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Movie;
import com.example.demo.entities.Theater;
import com.example.demo.repositories.MovieRepository;

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


	public List<Movie> moviesByTheater(Theater theater) {
		return mrepo.getMoviesByTheater(theater);
	}
	
	public void deleteMovieById(int movie_id) {
		// TODO Auto-generated method stub
		Optional<Movie> movie = mrepo.findById(movie_id);
        if(movie.isPresent())
          mrepo.deleteById(movie_id);
        
		
	}
	
}
