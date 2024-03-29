package com.example.demo.repositories;

import com.example.demo.entities.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    @Query("select c from Customer c where c.login_id=:login")
    Customer getCustomerByLogin(Login login);
}
