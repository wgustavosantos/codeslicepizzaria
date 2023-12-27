package com.ufpa.codeslice.services;

import java.util.List;
import java.util.stream.Collectors;

import com.ufpa.codeslice.dto.ProductDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ufpa.codeslice.repositories.ProductRepository;
import com.ufpa.codeslice.entities.Product;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;
	
	@Transactional(readOnly = true)
	public List<ProductDTO> findAll() {
		List<Product> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}

	public Product save (Product product) {

		return repository.save(product);
	}

	public Product get (Long productId){
		return repository.findById(productId).get();
	}

}
