package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;

@Service
public class LoginService {
	@Autowired
<<<<<<< HEAD:backend/src/main/java/com/example/demo/services/LoginService.java
	private LoginRepository lrepo;
=======
	LoginRepository lrepo;
>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/services/LoginService.java
	
	public Login getLogin(String username,String password)
	{
		Login l;
<<<<<<< HEAD:backend/src/main/java/com/example/demo/services/LoginService.java
		Optional<Login> ol = lrepo.getLogin(username, password);
=======
		Optional<Login> ol=lrepo.getLogin(username, password);
>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/services/LoginService.java
		try {
			l=ol.get();
		}catch(Exception e)
		{
			l=null;
		}
		return l;
	}
	public Login save(Login l)
	{
		return lrepo.save(l);
	}
<<<<<<< HEAD:backend/src/main/java/com/example/demo/services/LoginService.java

	public Login getLoginById(int id) {
		return  lrepo.getLoginByLId(id);
	}
=======
>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/services/LoginService.java
}
