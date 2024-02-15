package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Movie;
@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {

}
