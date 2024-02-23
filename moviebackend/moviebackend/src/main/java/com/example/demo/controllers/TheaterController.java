package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import com.example.demo.entities.Login;
import com.example.demo.entities.Movie;
import com.example.demo.entities.Role;
import com.example.demo.entities.Theater;
import com.example.demo.pojo.LoginCheck;
import com.example.demo.pojo.TheaterPoJo;
import com.example.demo.pojo.TheaterStatusRequest;
import com.example.demo.services.LoginService;
import com.example.demo.services.MovieService;
import com.example.demo.services.RoleService;
import com.example.demo.services.ShowService;
import com.example.demo.services.TheaterService;

@CrossOrigin(origins="http://localhost:3000",exposedHeaders="**")
@RestController
public class TheaterController {
	
	@Autowired
    private LoginService lservice;
    @Autowired
    private RoleService rservice;
    @Autowired
    private TheaterService theaterservice;
    @Autowired
    private MovieService mservice;

    @Autowired
    private ShowService showservice;


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

        Theater theater = theaterservice.getTheaterByLogin(login);
        status = theater.getTheater_status();

        return  theater;

    }

    @GetMapping("/displaypendingtheaters")
    public List<Theater> displayPendingTheaters() {
        return theaterservice.getPendingTheaters();
    }

    @PutMapping("/updatestatus/{id}")
    public Theater updateTheaterStatus(@PathVariable("id") int id, @RequestBody TheaterStatusRequest request) {
        theaterservice.updateTheaterStatus(id, request.getStatus());
        Theater t = theaterservice.getTheaterByTheaterId(id);
        return t;
    }

    @GetMapping("/getTheater")
    public Theater getTheater(@RequestParam int id){
        Login login = lservice.getLoginById(id);
        Theater theater = theaterservice.getTheaterByLogin(login);

        return theater;
    }
    
    @GetMapping("/locations")
    public List<String> getAllTheaterLocations(){
    	return theaterservice.getAllTheaterLocations();
    }
    
    //for admin only
    @GetMapping("/alltheaters")
    public List<Theater> getAllTheaters(){
    	return theaterservice.getTheaters();
    }
    
    @GetMapping("/getTheatersByMovie/{mid}")
    public List<Theater> getTheaterByMovie(@PathVariable("mid") int mid){

        Movie movie = mservice.getMovieByMid(mid);

       List<Theater> theaters = showservice.getTheaters(movie);
       return theaters;

    }


	

}
