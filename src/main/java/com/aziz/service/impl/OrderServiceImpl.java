package com.aziz.service.impl;

import com.aziz.domain.OrderStatus;
import com.aziz.domain.PaymentStatus;
import com.aziz.modal.*;
import com.aziz.repository.AddressRepository;
import com.aziz.repository.OrderRepository;
import com.aziz.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final AddressRepository addressRepository;

    @Override
    public Set<Order> createOrder(User user, Address shippingAddress, Cart cart) {

        if (!user.getAddresses().contains(shippingAddress)) {
            user.getAddresses().add(shippingAddress);
        }
        Address address = addressRepository.save(shippingAddress);

        Map<Long, List<CartItem>> itemsBySeller = cart.getCartItems().stream()
                .collect(Collectors.groupingBy(item->item.getProduct()
                        .getSeller().getId()));
        Set<Order> orders = new HashSet<>();

        for (Map.Entry<Long, List<CartItem>> entry : itemsBySeller.entrySet()) {
            Long sellerId = entry.getKey();
            List<CartItem> items = entry.getValue();

            int totalOrderPrice = items.stream().mapToInt(
                    CartItem::getSellingPrice
            ).sum();
            int totalItem = items.stream().mapToInt(CartItem::getQuantity).sum();

            Order createdOrder = new Order();
            createdOrder.setUser(user);
            createdOrder.setSellerId(sellerId);
            createdOrder.setTotalMrpPrice(totalOrderPrice);
            createdOrder.setTotalSellingPrice(totalOrderPrice);
            createdOrder.setTotalItem(totalItem);
            createdOrder.setShippingAddress(address);
            createdOrder.setOrderStatus(OrderStatus.PENDING);
            createdOrder.getPaymentDetails().setStatus(PaymentStatus.PENDING);

            Order savedOrder = orderRepository.save(createdOrder);
            orders.add(savedOrder);

            List<OrderItem> OrderItems = new ArrayList<>();
        }


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
