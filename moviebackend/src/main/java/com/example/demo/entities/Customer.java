package com.example.demo.entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "customers")
public class Customer {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int cust_id;
	String name;
	String contact;
	Date dob;
	String email;
	@OneToOne
	@JoinColumn(name="login_id")
	Login login_id;
	public Customer(String name, String contact, Date dob, String email, Login login) {
		super();
		this.name = name;
		this.contact = contact;
		this.dob = dob;
		this.email = email;
		this.login_id = login;
	}
	
	
}
