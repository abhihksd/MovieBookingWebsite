package com.example.demo.repositories;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Theater;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TheaterRepository extends JpaRepository<Theater, Integer> {

}