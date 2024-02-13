package com.example.demo.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="movies")
public class Movie {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int movie_id;
	@Column
	String title;
	@Column
	String director;
	@Column
	Date release_date;
	@Column
	String genre;
	@Column
	int duration;
	@Column
	String language;
	
	public Movie(String title, String director, Date release_date, String genre, int duration, String language) {
		super();
		this.title = title;
		this.director = director;
		this.release_date = release_date;
		this.genre = genre;
		this.duration = duration;
		this.language = language;
	}
	
	

}
