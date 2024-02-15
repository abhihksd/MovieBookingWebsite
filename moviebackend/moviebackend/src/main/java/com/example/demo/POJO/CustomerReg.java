package com.example.demo.POJO;

import java.sql.Date;

import com.example.demo.entities.Login;
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
