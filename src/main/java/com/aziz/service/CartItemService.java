package com.aziz.service;

import com.aziz.modal.CartItem;

public interface CartItemService {

    CartItem updateCartItem(Long userId, Long id, CartItem cartItem);
    void removeCartItem(Long userId, Long cartItemId);
}
