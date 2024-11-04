package com.aziz.service.impl;

import com.aziz.modal.Order;
import com.aziz.modal.PaymentOrder;
import com.aziz.modal.User;
import com.aziz.repository.OrderRepository;
import com.aziz.repository.PaymentOrderRepository;
import com.aziz.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private PaymentOrderRepository paymentOrderRepository;
    private OrderRepository orderRepository;


    @Override
    public PaymentOrder createOrder(User user, Set<Order> orders) {

        Long amount = orders.stream().mapToLong(Order::getTotalSellingPrice).sum();

        PaymentOrder paymentOrder = new PaymentOrder();
        paymentOrder.setAmount(amount);
        paymentOrder.setUser(user);
        paymentOrder.setOrders(orders);

        return paymentOrderRepository.save(paymentOrder);
    }

    @Override
    public PaymentOrder getPaymentOrderById(String orderId) {
        return null;
    }

    @Override
    public PaymentOrder getPaymentOrderByPaymentId(String paymentId) {
        return null;
    }

    @Override
    public Boolean ProceedPaymentOrder(PaymentOrder paymentOrder, String paymentId, String paymentLinkId) {
        return null;
    }

    @Override
    public String createStripePaymentLink(User user, Long amount, Long orderId) {
        return "";
    }
}
