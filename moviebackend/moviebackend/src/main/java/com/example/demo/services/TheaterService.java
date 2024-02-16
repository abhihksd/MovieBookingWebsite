package com.example.demo.services;

import com.example.demo.Exception.TheaterNotFoundException;
import com.example.demo.entities.Theater;
import com.example.demo.repositories.TheaterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class TheaterService {
    @Autowired
    private TheaterRepository theaterRepository;

    public Theater saveTheater(Theater t){
        return theaterRepository.save(t);
    }

    public Theater getTheaterByLoginId(int login_id){
        return (theaterRepository.getTheaterByLoginId(login_id)).get(); //return type is Theater so use get because of Optional<Theater>
    }

    public Optional<Theater> getTheaterByTheaterId(int theater_id){
        return  theaterRepository.findById(theater_id);
    }

    //for system admin

    public List<Theater> getPendingTheaters() {
        return theaterRepository.findTheatersWithStatusZero(); // Assuming 0 represents pending status
    }

    public void updateTheaterStatus(int id, int status) {
        Optional<Theater> optionalTheater = theaterRepository.findById(id);
        if (optionalTheater.isPresent()) {
            Theater theater = optionalTheater.get();
            theater.setTheater_status(status);
            theaterRepository.save(theater);
        } else {
            // Handle theater not found scenario
            throw new TheaterNotFoundException(id);
        }
    }
}
