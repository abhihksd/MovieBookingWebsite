package com.example.demo.entities;

import java.sql.Date;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

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
@Table(name="movies")	
public class Movie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int movie_id;
	@Column
	String title;
	@Column
	String director;
	@Column
	LocalDate release_date;
	@Column
	String genre;
	@Column
	int duration;
	@Column
	String language;
	@Column
	String description;

	@ManyToOne
	@JoinColumn(name = "theater_id")
	Theater theater;

	public Movie(String title, String director, LocalDate release_date, String genre,String description, int duration, String language,Theater theater) {
		super();
		this.title = title;
		this.director = director;
		this.release_date = release_date;
		this.genre = genre;
		this.duration = duration;
		this.language = language;
		this.description = description;
		this.theater = theater;
	}
	

}
