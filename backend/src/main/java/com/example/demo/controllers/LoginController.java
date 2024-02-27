package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
<<<<<<< HEAD:backend/src/main/java/com/example/demo/controllers/LoginController.java
import com.example.demo.POJO.LoginCheck;
=======
import com.example.demo.entities.LoginCheck;
>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/controllers/LoginController.java
import com.example.demo.services.LoginService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class LoginController {
<<<<<<< HEAD:backend/src/main/java/com/example/demo/controllers/LoginController.java
	
	@Autowired
	LoginService lservice;
	
=======
	@Autowired
	LoginService lservice;
>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/controllers/LoginController.java
	@PostMapping("chkLogin")
	public Login chkLogin(@RequestBody LoginCheck lcheck) {
		return lservice.getLogin(lcheck.getUsername(), lcheck.getPassword());
	}
}
