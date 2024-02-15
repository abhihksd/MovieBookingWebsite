package com.example.demo.controllers;

import com.example.demo.POJO.TheaterPoJo;
import com.example.demo.entities.Login;
import com.example.demo.entities.Theater;
import com.example.demo.repositories.TheaterRepository;
import com.example.demo.services.LoginService;
import com.example.demo.services.TheaterService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class TheaterController {
    @Autowired
    private LoginService lservice;
    @Autowired
    private TheaterService theaterservice;

    @PostMapping("/addTheater")
    public Theater addTheater(@RequestBody TheaterPoJo th, HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        String username = null;
        String password = null;

        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("username")) {
                    username = cookie.getValue();
                    System.out.println(username);
                } else if (cookie.getName().equals("password")) {
                    password = cookie.getValue();
                    System.out.println(password);
                }
            }
        }

        Login l = lservice.getLogin(username, password);

        Theater t = new Theater(th.getTheater_name(), th.getLocation(), th.getTotal_seats(), l);

        return theaterservice.saveTheater(t);
    }
}

