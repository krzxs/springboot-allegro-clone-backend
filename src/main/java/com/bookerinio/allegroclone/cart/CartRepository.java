package com.bookerinio.allegroclone.cart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Long> {

    List<Cart> findByUserUniqueId(String uniqueId);
    @Transactional
    void deleteCartByProductUniqueId(String uniqueId);
}
