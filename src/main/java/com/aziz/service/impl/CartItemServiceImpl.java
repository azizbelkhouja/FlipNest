package com.aziz.service.impl;

import com.aziz.modal.CartItem;
import com.aziz.repository.CartItemRepository;
import com.aziz.service.CartItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CartItemServiceImpl implements CartItemService {

    private final CartItemRepository cartItemRepository;

    @Override
    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) {
        return null;
    }

    @Override
    public void removeCartItem(Long userId, Long cartItemId) {

    }

    @Override
    public CartItem findCartItemById(Long id) {
        return null;
    }
}
