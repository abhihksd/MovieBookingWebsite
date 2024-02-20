package com.example.demo.services;

import com.example.demo.entities.Movie;
import com.example.demo.entities.Show;
import com.example.demo.repositories.ShowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ShowService {

    @Autowired
    ShowRepository srepo;

    public Show saveShow(Show s)
    {
        return srepo.save(s);
    }

//    public List<Show> getShowsByDateAndMovie(LocalDate date, Movie movie) {
//        // Implement logic to fetch shows for a given date and movie
//
//        return;
//    }

}