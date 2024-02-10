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
	String contact;
	Date dob;
	String email;
	Login login;

}
