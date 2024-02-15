package com.example.demo.POJO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginCheck {
	
	String username;
	String password;

	public LoginCheck(String username, String password) {
		this.username = username;
		this.password = password;
	}
}
