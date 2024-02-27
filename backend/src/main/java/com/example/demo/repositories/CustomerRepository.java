package com.example.demo.repositories;

<<<<<<< HEAD:backend/src/main/java/com/example/demo/repositories/CustomerRepository.java
import com.example.demo.entities.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
=======
import org.springframework.data.jpa.repository.JpaRepository;
>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/repositories/CustomerRepository.java
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
<<<<<<< HEAD:backend/src/main/java/com/example/demo/repositories/CustomerRepository.java

    @Query("select c from Customer c where c.login_id=:login")
    Customer getCustomerByLogin(Login login);
=======
	

>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/repositories/CustomerRepository.java
}
