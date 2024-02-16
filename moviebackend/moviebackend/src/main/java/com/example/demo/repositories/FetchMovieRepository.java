package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Movie;
import org.springframework.stereotype.Repository;

@Repository
public interface FetchMovieRepository extends JpaRepository<Movie, Integer> {

}