package com.example.demo.entities;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class CustomerReg {
	String username;
	String password;
	String name;
	String phone_number;
	String address;
	String email;
	Login login;
	
	int userType;

}
