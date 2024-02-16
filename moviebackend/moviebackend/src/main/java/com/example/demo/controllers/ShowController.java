package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Movie;
import com.example.demo.entities.Show;
import com.example.demo.services.MovieService;
import com.example.demo.services.ShowService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ShowController {

    @Autowired
    private ShowService sservice;

    @Autowired
    private MovieService mservice;


}