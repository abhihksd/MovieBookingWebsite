package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Movie;

public interface FetchMovieRepository extends JpaRepository<Movie, Integer> {

}
