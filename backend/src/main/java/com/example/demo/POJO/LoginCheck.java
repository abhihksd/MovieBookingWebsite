<<<<<<< HEAD:backend/src/main/java/com/example/demo/POJO/LoginCheck.java
package com.example.demo.POJO;
=======
package com.example.demo.pojo;
>>>>>>> AbhishekS:moviebackend/moviebackend/src/main/java/com/example/demo/POJO/LoginCheck.java

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
