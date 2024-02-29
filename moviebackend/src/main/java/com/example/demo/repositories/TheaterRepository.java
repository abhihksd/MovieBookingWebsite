package com.example.demo.repositories;

import com.example.demo.entities.Login;
import com.example.demo.entities.Theater;
import java.util.List;
import java.util.Optional;

import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.parser.Entity;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface TheaterRepository extends JpaRepository<Theater,Integer> {


    @Query("select t from Theater t where t.login=:login")
    public Theater getTheaterByLogin(Login login);
    // @Query("SELECT t FROM Theater t WHERE t.theater_status = 0")
    // List<Theater> findTheatersWithStatusZero();
    
    @Query("select t.theater_location from Theater t")
    List<String> findAllByTheater_location();

    @Query("SELECT t FROM Theater t WHERE t.theater_status = 0")
    public List<Theater> findTheatersWithStatusZero();



    @Query("select t from Theater t where t.theater_id In :tids")
    Set<Theater> getTheaterByTheaterIds(Set<Integer> tids);
}
