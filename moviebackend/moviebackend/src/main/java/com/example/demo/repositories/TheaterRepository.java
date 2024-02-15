package com.example.demo.repositories;

import com.example.demo.entities.Theater;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface TheaterRepository extends JpaRepository<Theater,Integer> {

    @Query("select t from Theater t where login_id=:loginId")
    public Optional<Theater> getTheaterByLoginId(Integer loginId);
}
