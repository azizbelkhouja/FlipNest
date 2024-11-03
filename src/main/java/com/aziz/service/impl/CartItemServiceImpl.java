package com.aziz.service.impl;

import com.aziz.modal.CartItem;
import com.aziz.modal.User;
import com.aziz.repository.CartItemRepository;
import com.aziz.service.CartItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CartItemServiceImpl implements CartItemService {

    private final CartItemRepository cartItemRepository;

    @Override
    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws Exception {

        CartItem item = findCartItemById(id);
        User cartItemUser = item.getCart().getUser();

        if (cartItemUser.getId().equals(userId)) {
            item.setQuantity(cartItem.getQuantity());
            item.setMrpPrice(item.getQuantity() * item.getProduct().getMrpPrice());
            item.setSellingPrice(item.getQuantity() * item.getProduct().getSellingPrice());
            return cartItemRepository.save(item);
        }
        throw new Exception("The Item you trying to update is not yours");
    }

    @Override
    public void removeCartItem(Long userId, Long cartItemId) {

    }

    @Override
    public CartItem findCartItemById(Long id) {
        return null;
    }
}
