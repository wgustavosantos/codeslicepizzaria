package com.ufpa.codeslice.dto;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.ufpa.codeslice.entities.Order;
import com.ufpa.codeslice.entities.OrderStatus;

public class OrderDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String address;
	private Double latitude;
	private Double longitude;
	private Instant moment;
	private OrderStatus status; 
	private Double total;
	
	private List<ProductDTO> products = new ArrayList<>();
	
	public OrderDTO() {
		
	}

	public OrderDTO(Long id, String address, Double latitude, Double longitude, Instant moment, OrderStatus status, Double total) {
		super();
		this.id = id;
		this.address = address;
		this.latitude = latitude;
		this.longitude = longitude;
		this.moment = moment;
		this.status = status;
		this.total = total;
	}
	
	public OrderDTO(Order entity) {
		super();
		id = entity.getId();
		address = entity.getAddress();
		latitude = entity.getLatitude();
		longitude = entity.getLongitude();
		moment = entity.getMoment();
		status = entity.getStatus();
		products = entity.getProducts().stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
		total = entity.getTotal();
	}

	public Long getId() {
		return id;
	}

	public String getAddress() {
		return address;
	}

	public Double getLatitude() {
		return latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public Instant getMoment() {
		return moment;
	}

	public OrderStatus getStatus() {
		return status;
	}
		
	public Double getTotal() {
		return total;
	}

	public List<ProductDTO> getProducts() {
		return products;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public void setMoment(Instant moment) {
		this.moment = moment;
	}

	public void setStatus(OrderStatus status) {
		this.status = status;
	}
	
	public void setTotal(Double total) {
		this.total = total;
	}
	
}
