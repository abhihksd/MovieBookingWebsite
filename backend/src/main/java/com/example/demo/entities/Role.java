package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
<<<<<<< HEAD:backend/src/main/java/com/example/demo/entities/Role.java
=======
import lombok.AllArgsConstructor;
>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/entities/Role.java
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
<<<<<<< HEAD:backend/src/main/java/com/example/demo/entities/Role.java
@NoArgsConstructor
=======
>>>>>>> AbhishekS:moviebackend/src/main/java/com/example/demo/entities/Role.java
@Entity
@Table(name="role")
public class Role {
	@Id
	int role_id;
	@Column
	String role_name;

}
