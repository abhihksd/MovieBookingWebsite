package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Movie;
import com.example.demo.repositories.MovieRepository;

@Service
public class MovieService {

	@Autowired
	private MovieRepository mrepo;

	public Movie saveMovie(Movie m)
	{
		return mrepo.save(m);
	}



}
