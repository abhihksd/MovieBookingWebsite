package com.example.demo.repositories;

import com.example.demo.entities.Movie;
import com.example.demo.entities.Show;
import com.example.demo.entities.Theater;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

<<<<<<< HEAD:backend/moviebackend/src/main/java/com/example/demo/repositories/RoleRepository.java
import com.example.demo.entities.Role;
@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
=======
import java.util.List;
>>>>>>> AbhishekS:moviebackend/moviebackend/src/main/java/com/example/demo/repositories/ShowRepository.java

@Repository
public interface ShowRepository extends JpaRepository<Show,Integer> {

    @Query("select s.theater from Show s where s.movie=:movie")
    List<Theater> getTheatersByMovie(Movie movie);

    @Query("select s from Show s where s.theater=:theater and s.movie=:movie")
    List<Show> getShowByTidMid(Theater theater, Movie movie);
}
