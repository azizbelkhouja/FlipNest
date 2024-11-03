package com.aziz.service.impl;


import com.aziz.modal.Cart;
import com.aziz.modal.CartItem;
import com.aziz.modal.Product;
import com.aziz.modal.User;
import com.aziz.repository.CartItemRepository;
import com.aziz.repository.CartRepository;
import com.aziz.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;

    @Override
    public CartItem addCartItem(User user, Product product, String size, int quantity) {
        return null;
    }

    @Override
    public Cart findUserCart(User user) {
        return null;
    }
}























