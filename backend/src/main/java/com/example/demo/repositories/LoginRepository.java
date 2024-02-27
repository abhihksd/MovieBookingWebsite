package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;
@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {
<<<<<<< HEAD:backend/src/main/java/com/example/demo/repositories/LoginRepository.java
	
	@Query("select l from Login l where username=:username and password=:password")
	public Optional<Login> getLogin(String username,String password);

	@Query("select l from Login l where login_id=:id")
    public Login getLoginByLId(int id);
=======
	@Query("select l from Login l where username=:username and password=:password")
	public Optional<Login> getLogin(String username,String password);
>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/repositories/LoginRepository.java
}
