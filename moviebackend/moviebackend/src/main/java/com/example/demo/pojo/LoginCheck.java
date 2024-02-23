package com.example.demo.pojo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginCheck {
	
	String username;
	String password;
	
	public LoginCheck(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	
	
}
