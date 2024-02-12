package com.example.demo.controllers;

import com.example.demo.entities.Login;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entities.Theater;
import com.example.demo.entities.TheaterReg;
import com.example.demo.services.TheaterService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class TheaterController {

    @Autowired
    private TheaterService theaterService;

    @Autowired
    private HttpSession httpSession;

    @PostMapping("/regTheater")
    public Theater addTheater(@RequestBody TheaterReg t) {
        String loggedInUsername = (String) httpSession.getAttribute("loggedInUsername");
        String loggedInPassword = (String) httpSession.getAttribute("loggedInPassword");

//        Login l = new Login(loggedInUsername,loggedInPassword,2);

        //code for getting login id from login table using session

        int login_id =


        Theater th = new Theater(t.getTheater_name(),t.getLocation(),t.getTotal_seats(),t.getScreens_count(),l);

        return theaterService.saveTheater(th);
    }
}
