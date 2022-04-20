package com.bookerinio.allegroclone.cart;


import com.bookerinio.allegroclone.product.Product;
import com.bookerinio.allegroclone.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Cart {

    @SequenceGenerator(name = "cart_sequence", sequenceName = "cart_sequence", allocationSize = 1)
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cart_sequence")
    private Long id;
    @JoinColumn(nullable = false, name = "user_id")
    private String userUniqueId;
    @JoinColumn(nullable = false, name = "product_id")
    private String productUniqueId;

    public Cart(String userUniqueId, String productUniqueId) {
        this.userUniqueId = userUniqueId;
        this.productUniqueId = productUniqueId;
    }
}
