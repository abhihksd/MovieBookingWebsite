package com.example.demo.services;

import com.example.demo.entities.Theater;
import com.example.demo.repositories.TheaterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class TheaterService {
    @Autowired
    private TheaterRepository trepo;

    public Theater saveTheater(Theater t){
        return trepo.save(t);
    }

    public Theater getTheaterByLoginId(int login_id){
        return (trepo.getTheaterByLoginId(login_id)).get(); //return type is Theater so use get because of Optional<Theater>
    }

    public Optional<Theater> getTheaterByTheaterId(int theater_id){
        return  trepo.findById(theater_id);
    }
}
