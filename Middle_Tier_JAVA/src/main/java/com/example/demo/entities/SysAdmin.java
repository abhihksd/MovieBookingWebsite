//package com.example.demo.entities;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.OneToOne;
//import javax.persistence.Table;
//
//import lombok.Getter;
//import lombok.Setter;
//
//@Entity
//@Table(name="system_admin")
//@Getter
//@Setter
//public class SysAdmin {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	int sysadmin_id;
//	String fname,mname,lname,email,contact;
//	byte [] picture;
//	
//	@OneToOne
//	@JoinColumn(name="login_id")
//	Login login_id;
//
//}
