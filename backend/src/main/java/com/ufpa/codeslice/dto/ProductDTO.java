package com.ufpa.codeslice.dto;

import java.io.Serializable;

import com.ufpa.codeslice.entities.Product;

public class ProductDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private Double price;
	private String description;
	private String imageUri;
	
	public ProductDTO() {
		
	}

	public ProductDTO(Long id, String name, Double price, String description, String imageUri) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.description = description;
		this.imageUri = imageUri;
	}
	
	public ProductDTO(Product entity) {
		super();
		id = entity.getId();
		name = entity.getName();
		price = entity.getPrice();
		description = entity.getDescription();
		imageUri = entity.getImageUri();
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public Double getPrice() {
		return price;
	}

	public String getDescription() {
		return description;
	}

	public String getImageUri() {
		return imageUri;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setImageUri(String imageUri) {
		this.imageUri = imageUri;
	}

}
