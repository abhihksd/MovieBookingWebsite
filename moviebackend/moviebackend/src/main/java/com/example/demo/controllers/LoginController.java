package com.example.demo.controllers;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Login;
import com.example.demo.entities.LoginCheck;
import com.example.demo.services.LoginService;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entities.Login;
import com.example.demo.entities.LoginCheck;
import com.example.demo.services.LoginService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class LoginController {

	@Autowired
	LoginService lservice;

	@Autowired
	private HttpSession httpSession;

	@PostMapping("chkLogin")
	public Login chkLogin(@RequestBody LoginCheck lcheck) {
		Login loggedInUser = lservice.getLogin(lcheck.getUsername(), lcheck.getPassword());
		if (loggedInUser != null) {

			httpSession.setAttribute("loggedInUsername", lcheck.getUsername());
			httpSession.setAttribute("loggedInPassword", lcheck.getPassword());
		}
		return loggedInUser;
	}
}
