package com.iwax.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Sneaker {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	Long id;

	String brandName;
	
	Double size;
	
	String picture;
	
	Double price;
	
	Integer releaseDate;
	
	String description;
	
	

	public Sneaker() {}



	public Sneaker(Long id, String brandName, String picture,  Double size, Double price, Integer releaseDate,
			String description) {
		super();
		this.id = id;
		this.brandName = brandName;
		this.size = size;
		this.picture = picture;
		this.price = price;
		this.releaseDate = releaseDate;
		this.description = description;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getBrandName() {
		return brandName;
	}



	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}



	public Double getSize() {
		return size;
	}



	public void setSize(Double size) {
		this.size = size;
	}



	public String getPicture() {
		return picture;
	}



	public void setPicture(String picture) {
		this.picture = picture;
	}



	public Double getPrice() {
		return price;
	}



	public void setPrice(Double price) {
		this.price = price;
	}



	public Integer getReleaseDate() {
		return releaseDate;
	}



	public void setReleaseDate(Integer releaseDate) {
		this.releaseDate = releaseDate;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}

	
	


	
	
	
	
	

}
