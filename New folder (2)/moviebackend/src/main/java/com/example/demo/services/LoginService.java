package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;

@Service
public class LoginService {
	@Autowired
	private LoginRepository lrepo;
	
	public Login getLogin(String username,String password)
	{
		Login l;
		Optional<Login> ol = lrepo.getLogin(username, password);
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

	public Login getLoginById(int id) {
		return  lrepo.getLoginByLId(id);
	}
}
