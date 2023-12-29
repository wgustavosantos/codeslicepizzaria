package com.ufpa.codeslice.entities;

public enum OrderStatus {
	
	PENDING, DELIVERED;

	public OrderStatus toggleStatus() {
		return this == PENDING ? DELIVERED : PENDING;
	}
}
