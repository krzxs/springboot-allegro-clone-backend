package com.bookerinio.allegroclone.cart;

import com.bookerinio.allegroclone.product.Product;
import com.bookerinio.allegroclone.product.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Service
public class CartService {

    private final CartRepository cartRepository;
    private final ProductRepository productRepository;

    public void addProductToCart(Cart cart) {
        cartRepository.save(cart);
    }

    public void removeProductFromCart(Cart cart) {
        cartRepository.deleteCartByProductUniqueId(cart.getProductUniqueId());
    }

    public CartListed displayProductsInCart(String uniqueId) {
        CartListed cartListed = new CartListed();
        cartListed.setUserUniqueId(uniqueId);

        List<Cart> cartList = cartRepository.findByUserUniqueId(uniqueId);
        List<Product> productList = new ArrayList<Product>();
        for(Cart c : cartList) {
            Product p = productRepository.findProductByUniqueId(c.getProductUniqueId());
            productList.add(p);
        }
        cartListed.setProductList(productList);
        return cartListed;
    }
}
