package com.example.demo.entities;


import org.hibernate.annotations.ManyToAny;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "login")

@Getter
@Setter
public class Login {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int login_id;
	String username;
	String password;
	@ManyToOne
	@JoinColumn(name = "role_idl")
	Role role_id;
	boolean status;
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Login(String username, String password, Role role_id, boolean status) {
		super();
		this.username = username;
		this.password = password;
		this.role_id = role_id;
		this.status = status;
	}
	
	
}
