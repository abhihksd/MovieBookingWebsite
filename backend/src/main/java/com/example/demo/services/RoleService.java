package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Role;
import com.example.demo.repositories.RoleRepository;

@Service
public class RoleService {
	@Autowired
<<<<<<< HEAD:backend/src/main/java/com/example/demo/services/RoleService.java
	private RoleRepository rrepo;
=======
	RoleRepository rrepo;
>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/services/RoleService.java
	
	public Role getRole(int id)
	{
		return rrepo.findById(id).get();
	}

}
