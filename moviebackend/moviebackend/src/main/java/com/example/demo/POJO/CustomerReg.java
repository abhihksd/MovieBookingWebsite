package com.example.demo.POJO;

import java.sql.Date;

import com.example.demo.entities.Login;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class CustomerReg {
	private String username;
	private String password;
	private String name;
	private String phone_number;
	private String address;
	private String email;
	private Login login;
	
	private int userType;

}
