package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Show;
@Repository
public interface ShowRepository extends JpaRepository<Show, Integer> {

}
