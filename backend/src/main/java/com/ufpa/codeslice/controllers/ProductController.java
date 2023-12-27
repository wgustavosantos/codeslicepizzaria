package com.ufpa.codeslice.controllers;

import java.io.IOException;
import java.util.List;
import java.util.Objects;

import com.ufpa.codeslice.config.S3FotoStorageService;
import com.ufpa.codeslice.config.newPhoto;
import com.ufpa.codeslice.entities.Product;
import com.ufpa.codeslice.dto.ProductDTO;
import com.ufpa.codeslice.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/products")
public class ProductController {
	
	@Autowired
	private ProductService service;

	@Autowired
	private S3FotoStorageService s3FotoStorageService;
	
	@GetMapping
	public ResponseEntity<List<ProductDTO>> findAll() {
		List<ProductDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	@PostMapping
	public ResponseEntity<Product> add(@RequestBody Product product) {

		final Product save = service.save(product);
		return ResponseEntity.ok(save);
	}


	@PostMapping(value = "{productId}/photo", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> addPhoto(MultipartFile photo, @PathVariable String productId) throws IOException {

		String originalFilename = productId
				+ "_"
				+ Objects.requireNonNull
						(photo.getOriginalFilename())
				.substring(photo.getOriginalFilename().lastIndexOf("."));
		final newPhoto build = newPhoto.builder().id(productId).contentType(photo.getContentType()).inputStream(photo.getInputStream()).fileName(originalFilename).build();

		final String url = s3FotoStorageService.armazenar(build);

		final Product product = service.get(Long.valueOf(productId));
		product.setImageUri(url);
		final Product save = service.save(product);
		return null;
	}
}
