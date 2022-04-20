package com.bookerinio.allegroclone.product;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@Service
public class ProductService {

    private final ProductRepository productRepository;

    public Product saveProduct(Product product) {
        product.setUniqueId(UUID.randomUUID().toString());
        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductDetails(String uniqueId) {
        return productRepository.findProductByUniqueId(uniqueId);
    }
}
