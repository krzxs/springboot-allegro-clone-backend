package com.bookerinio.allegroclone.cart;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("allegro/cart")
public class CartController {

    private final CartService cartService;

    @PostMapping("add")
    public void addToCart(@RequestBody Cart cart) {
        cartService.addProductToCart(cart);
    }

    @GetMapping("remove")
    public void removeFromCart(@RequestBody Cart cart) {
        cartService.removeProductFromCart(cart);
    }

    @GetMapping("show/{userUniqueId}")
    public CartListed showCartItems(@PathVariable String userUniqueId) {
        return cartService.displayProductsInCart(userUniqueId);
    }
}
