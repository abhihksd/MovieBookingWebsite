package com.example.demo.services;

import com.example.demo.Exception.MovieNotFoundException;
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


	public List<Movie> moviesByTheater(Theater theater) {
		return mrepo.getMoviesByTheater(theater);
	}
	public Movie updateMovie(Integer id, Movie updateMovie) {
		Movie movie = mrepo.findById(id)
				.orElseThrow(()->new MovieNotFoundException("Movie not found with id:"+id));
		if(updateMovie.getTitle()!=null) 
		movie.setTitle(updateMovie.getTitle());
		if(updateMovie.getDirector()!=null) 
		movie.setDirector(updateMovie.getDirector());
		if(updateMovie.getRelease_date()!=null) 
		movie.setRelease_date(updateMovie.getRelease_date());
		if(updateMovie.getGenre()!=null)
		movie.setGenre(updateMovie.getGenre());
		if(updateMovie.getDuration()!=0)
		movie.setDuration(updateMovie.getDuration());
		if(updateMovie.getLanguage()!=null)
		movie.setLanguage(updateMovie.getLanguage());
		if(updateMovie.getDescription()!=null)
		movie.setDescription(updateMovie.getDescription());
		
		return mrepo.save(movie);
	

	}
}
