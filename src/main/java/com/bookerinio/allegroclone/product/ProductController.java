package com.bookerinio.allegroclone.product;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("allegro/products")
public class ProductController {

    private final ProductService productService;

    @PostMapping("save")
    public Product saveProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @GetMapping("getAllProducts")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("details/{uniqueId}")
    public Product getProductDetails(@PathVariable String uniqueId) {
        return productService.getProductDetails(uniqueId);
    }
}
