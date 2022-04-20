package com.bookerinio.allegroclone.cart;

import com.bookerinio.allegroclone.product.Product;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CartListed {

    private String userUniqueId;
    private List<Product> productList;
}
