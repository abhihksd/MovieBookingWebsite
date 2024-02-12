package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="login")
public class Login {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int login_id;
	@Column
	String username;
	@Column
	String password;
	@ManyToOne
	@JoinColumn(name="role_id")
	Role role_id;
	public Login(String username, String password, Role role_id) {
		super();
		this.username = username;
		this.password = password;
		this.role_id = role_id;
	}
	public Login(String username, String password, int role_id) {
		super();
		this.username = username;
		this.password = password;
		this.role_id.role_id = role_id;
	}

}
