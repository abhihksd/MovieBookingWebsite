package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Movie;
import com.example.demo.repositories.FetchMovieRepository;

@Service
public class FetchMovieService {
    @Autowired
    private FetchMovieRepository fetchmovieRepository;

    public List<Movie> getAllMovies(){
        return fetchmovieRepository.findAll();
    }
    public List<Movie> getAllMoviesByTheaterLocation(String city)
    {
    	return fetchmovieRepository.findAllByTheaterLocation(city);
    }
    public Movie getMovieById(int id) {
        return fetchmovieRepository.findById(id).get();
    }
}
