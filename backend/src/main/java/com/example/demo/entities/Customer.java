package com.example.demo.entities;

<<<<<<< HEAD:backend/src/main/java/com/example/demo/entities/Customer.java
=======
import java.sql.Date;

>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/entities/Customer.java
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
@Table(name = "users")
public class Customer {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int user_id;
	String name;
<<<<<<< HEAD:backend/src/main/java/com/example/demo/entities/Customer.java
	String email;
	String phone_number;
	String address;
=======

	String email;

	String phone_number;

	String address;

>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/entities/Customer.java
	@OneToOne
	@JoinColumn(name="login_id")
	Login login_id;
	public Customer(String name, String phone_number, String address, String email, Login login_id) {
		super();
		this.name = name;
		this.phone_number = phone_number;
		this.address = address;
		this.email = email;
		this.login_id = login_id;
	}
	
	
}
