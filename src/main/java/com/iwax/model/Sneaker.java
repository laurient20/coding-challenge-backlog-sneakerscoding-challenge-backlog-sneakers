package com.iwax.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Sneaker {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	Long id;

	String code;
	
	String brandName;
	
	String model;
	
	Double snkSize;
	
	String picture;
	
	Double price;
	
	Date releaseDate;
	
	String description;
	
	String starRating;
	
	String imageUrl;
	
	

	public Sneaker() {}



	public Sneaker(Long id, String brandName, String picture,  Double snkSize, Double price, Date releaseDate,
			String description) {
		super();
		this.id = id;
		this.brandName = brandName;
		this.snkSize = snkSize;
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



	public Double getSnkSize() {
		return snkSize;
	}



	public void setSnkSize(Double snkSize) {
		this.snkSize = snkSize;
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



	public Date getReleaseDate() {
		return releaseDate;
	}



	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public String getStarRating() {
		return starRating;
	}



	public void setStarRating(String starRating) {
		this.starRating = starRating;
	}



	public String getImageUrl() {
		return imageUrl;
	}



	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}



	public String getCode() {
		return code;
	}



	public void setCode(String code) {
		this.code = code;
	}



	public String getModel() {
		return model;
	}



	public void setModel(String model) {
		this.model = model;
	}
	
	
	

}
