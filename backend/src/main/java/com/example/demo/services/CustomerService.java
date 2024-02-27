package com.example.demo.services;

<<<<<<< HEAD:backend/src/main/java/com/example/demo/services/CustomerService.java
import com.example.demo.entities.Login;
=======
>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/services/CustomerService.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.repositories.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
<<<<<<< HEAD:backend/src/main/java/com/example/demo/services/CustomerService.java
	private CustomerRepository crepo;
=======
	CustomerRepository crepo;
>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/services/CustomerService.java
	
	public Customer saveCustomer(Customer c)
	{
		return crepo.save(c);
	}

<<<<<<< HEAD:backend/src/main/java/com/example/demo/services/CustomerService.java
	public Customer getCustomerByLogin(Login login){
		return crepo.getCustomerByLogin(login);
	}



=======
>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/services/CustomerService.java
}
