package com.example.demo.controllers;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.POJO.ShowPoJo;
import com.example.demo.services.MovieService;
import com.example.demo.services.ShowService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ShowController {

    @Autowired
    private ShowService sservice;

    @Autowired
    private MovieService mservice;
    
    @PostMapping("/add-show")
    public ResponseEntity<String> addShow(@RequestBody ShowPoJo show) {
    	System.out.println("The ids recieved are: "+show.getMovie_id()+" "+show.getTheater_id()+show.getShowDate()+""+show.getShowTime());
    	sservice.addShow(show.getMovie_id(), show.getTheater_id(), show.getShowDate(), show.getShowTime());
        return ResponseEntity.ok("Show added successfully");
    }

}
