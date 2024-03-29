package com.example.demo.services;

import com.example.demo.entities.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.repositories.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	private CustomerRepository crepo;
	
	public Customer saveCustomer(Customer c)
	{
		return crepo.save(c);
	}

	public Customer getCustomerByLogin(Login login){
		return crepo.getCustomerByLogin(login);
	}



}
