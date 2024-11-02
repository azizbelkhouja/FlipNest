package com.aziz.controller;

import com.aziz.exceptions.ProductException;
import com.aziz.modal.Product;
import com.aziz.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    @GetMapping("/{productId}")
    public ResponseEntity<Product> getProductById(
            @PathVariable Long productId
    ) throws ProductException {

        Product product = productService.findProductById(productId);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

}
