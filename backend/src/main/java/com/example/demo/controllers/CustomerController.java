package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< HEAD:backend/src/main/java/com/example/demo/controllers/CustomerController.java
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
=======
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/controllers/CustomerController.java
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
<<<<<<< HEAD:backend/src/main/java/com/example/demo/controllers/CustomerController.java
import com.example.demo.POJO.CustomerReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.POJO.CustomerReg;
=======
import com.example.demo.entities.CustomerReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/controllers/CustomerController.java
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;
@CrossOrigin(origins="http://localhost:3000",exposedHeaders = "**")
@RestController
public class CustomerController {

	@Autowired
	private CustomerService cservice;
	
	@Autowired
	LoginService lservice;
	@Autowired
	RoleService rservice;
	@PostMapping("/registeruser")
	public Customer regCustomer(@RequestBody CustomerReg cr)
	{
<<<<<<< HEAD:backend/src/main/java/com/example/demo/controllers/CustomerController.java
		Role r = rservice.getRole(cr.getUserType());
		Login l = new Login(cr.getUsername(),cr.getPassword(),r);
		Login saved = lservice.save(l);
=======
		Role r=rservice.getRole(1);
		Login l=new Login(cr.getUsername(),cr.getPassword(),r);
		Login saved=lservice.save(l);
>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/controllers/CustomerController.java

		
		Customer c=new Customer(cr.getName(),cr.getPhone_number(),cr.getAddress(),cr.getEmail(),l);
		return cservice.saveCustomer(c);
		
	}
<<<<<<< HEAD:backend/src/main/java/com/example/demo/controllers/CustomerController.java
	@GetMapping("/userDetails/{login_id}")
	public Customer giveCustomer(@PathVariable int login_id){
		Login l = lservice.getLoginById(login_id);
		Customer c = cservice.getCustomerByLogin(l);
		return c;
	}
=======
>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/controllers/CustomerController.java
	
}
