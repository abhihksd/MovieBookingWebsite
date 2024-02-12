package com.example.demo.services;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Theater;
import com.example.demo.repositories.CustomerRepository;
import com.example.demo.repositories.TheaterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TheaterService {
    @Autowired
    TheaterRepository trepo;

    public Theater saveTheater(Theater t)
    {
        return trepo.save(t);
    }

}