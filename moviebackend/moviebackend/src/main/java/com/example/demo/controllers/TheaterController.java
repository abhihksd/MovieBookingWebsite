package com.example.demo.controllers;

import com.example.demo.POJO.LoginCheck;
import com.example.demo.POJO.TheaterPoJo;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.entities.Theater;
import com.example.demo.repositories.TheaterRepository;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;
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
    private RoleService rservice;
    @Autowired
    private TheaterService theaterservice;

    @PostMapping("/addTheater")
    public Theater addTheater(@RequestBody TheaterPoJo th) {

        Role r=rservice.getRole(2);
        Login l=new Login(th.getUsername(),th.getPassword(),r);
        Login saved=lservice.save(l);


        Login login = lservice.getLogin(th.getUsername(),th.getPassword());

        Theater t = new Theater(th.getTheater_name(), th.getTheater_location(),th.getTotal_seats(),login, th.getName(), th.getLicenseNumber(), th.getEmail(),th.getPhone_number(),th.getAddress());

        return theaterservice.saveTheater(t);
    }

    @PostMapping("/getTheaterAdminStatus")
    public Theater getStatus(@RequestBody LoginCheck lc){
        int status;

        Login login = lservice.getLogin(lc.getUsername(),lc.getPassword());

        int login_id = login.getLogin_id();

        Theater theater = theaterservice.getTheaterByLoginId(login_id);
        status = theater.getAdmin_status();

        return  theater;



    }
}

