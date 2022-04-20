package com.bookerinio.allegroclone.product;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Product {

    @SequenceGenerator(name = "product_sequence", sequenceName = "product_sequence", allocationSize = 1)
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_sequence")
    private Long id;
    private String name;
    private String uniqueId;
    private double price;
    private String imageUrl;

    public Product(String name, String uniqueId, double price, String imageUrl) {
        this.name = name;
        this.uniqueId = uniqueId;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
