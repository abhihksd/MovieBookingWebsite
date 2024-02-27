<<<<<<< HEAD:backend/src/main/java/com/example/demo/POJO/CustomerReg.java
package com.example.demo.POJO;
=======
package com.example.demo.pojo;
>>>>>>> AbhishekS:moviebackend/moviebackend/src/main/java/com/example/demo/POJO/CustomerReg.java

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
