package com.aziz.service.impl;

import com.aziz.domain.OrderStatus;
import com.aziz.modal.Address;
import com.aziz.modal.Cart;
import com.aziz.modal.Order;
import com.aziz.modal.User;
import com.aziz.service.OrderService;

import java.util.List;
import java.util.Set;

public class OrderServiceImpl implements OrderService {
    @Override
    public Set<Order> createOrder(User user, Address shippingAddress, Cart cart) {
        return Set.of();
    }

    @Override
    public Order findOrderById(Long id) {
        return null;
    }

    @Override
    public List<Order> userOrdersHistory(Long userId) {
        return List.of();
    }

    @Override
    public List<Order> sellerOrders(Long SellerId) {
        return List.of();
    }

    @Override
    public Order updateOrderStatus(Long id, OrderStatus orderStatus) {
        return null;
    }

    @Override
    public Order cancelOrder(Long orderId, User user) {
        return null;
    }
}
