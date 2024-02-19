package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Show;
import com.example.demo.repositories.ShowRepository;

@Service
public class ShowService {
	
	@Autowired
	ShowRepository srepo;
	
	public Show saveShow(Show s)
	{
		return srepo.save(s);
	}

}
