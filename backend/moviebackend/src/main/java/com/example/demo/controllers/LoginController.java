package com.example.demo.controllers;





import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

<<<<<<< HEAD:backend/moviebackend/src/main/java/com/example/demo/controllers/LoginController.java
import com.example.demo.entities.Login;
import com.example.demo.POJO.LoginCheck;
import com.example.demo.services.LoginService;
=======
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.Theater;
import com.example.demo.services.TheaterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.POJO.ShowPoJo;
import com.example.demo.services.MovieService;
import com.example.demo.services.ShowService;
>>>>>>> AbhishekS:moviebackend/moviebackend/src/main/java/com/example/demo/controllers/ShowController.java

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
<<<<<<< HEAD:backend/moviebackend/src/main/java/com/example/demo/controllers/LoginController.java
public class LoginController {
	
	@Autowired
	LoginService lservice;
	
	@PostMapping("chkLogin")
	public Login chkLogin(@RequestBody LoginCheck lcheck) {
		return lservice.getLogin(lcheck.getUsername(), lcheck.getPassword());
	}
=======
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

    @Autowired
    private TheaterService tservice;


    @GetMapping("/getShowTimingsByTheaterAndMovie/{theaterId}/{movieId}")
    public List<Show> getShowTimingsByTheaterAndMovie(@PathVariable int theaterId, @PathVariable int movieId) {

        Theater theater = tservice.getTheaterByTheaterId(theaterId);
        Movie movie = mservice.getMovieByMid(movieId);
        return sservice.getShowTimingsByTheaterAndMovie(theater, movie);
    }


>>>>>>> AbhishekS:moviebackend/moviebackend/src/main/java/com/example/demo/controllers/ShowController.java
}
