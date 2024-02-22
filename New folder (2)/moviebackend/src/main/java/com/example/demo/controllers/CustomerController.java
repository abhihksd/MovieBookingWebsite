package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.POJO.CustomerReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.POJO.CustomerReg;
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
		Role r = rservice.getRole(cr.getUserType());
		Login l = new Login(cr.getUsername(),cr.getPassword(),r);
		Login saved = lservice.save(l);

		
		Customer c=new Customer(cr.getName(),cr.getPhone_number(),cr.getAddress(),cr.getEmail(),l);
		return cservice.saveCustomer(c);
		
	}
	
}
