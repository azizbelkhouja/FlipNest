package com.aziz.service.impl;

import com.aziz.domain.PaymentOrderStatus;
import com.aziz.modal.Order;
import com.aziz.modal.PaymentOrder;
import com.aziz.modal.User;
import com.aziz.repository.OrderRepository;
import com.aziz.repository.PaymentOrderRepository;
import com.aziz.service.PaymentService;
import com.stripe.Stripe;
import com.stripe.StripeClient;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.model.checkout.Session;
import com.stripe.param.PaymentIntentConfirmParams;
import com.stripe.param.checkout.SessionCreateParams;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private PaymentOrderRepository paymentOrderRepository;
    private OrderRepository orderRepository;

    private String stripeSecretKey ="stripesecretkey";


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
    public PaymentOrder getPaymentOrderById(Long orderId) throws Exception {

        return paymentOrderRepository.findById(orderId).orElseThrow(
                () -> new Exception("Order not found")
        );
    }

    @Override
    public PaymentOrder getPaymentOrderByPaymentId(String paymentId) throws Exception {

        PaymentOrder paymentOrder = paymentOrderRepository.findByPaymentLinkId(paymentId);

        if (paymentOrder == null) {
            throw new Exception(("Payment order not found"));
        }

        return paymentOrder;
    }

    @Override
    public String createStripePaymentLink(User user, Long amount, Long orderId) throws StripeException {

        Stripe.apiKey = stripeSecretKey;
        SessionCreateParams params = SessionCreateParams.builder().addPaymentMethodType(SessionCreateParams
                .PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost3000/payment-success/" + orderId)
                .setCancelUrl("http://localhost3000/payment-cancelled/" + orderId)
                .addLineItem(SessionCreateParams.LineItem.builder()
                        .setQuantity(1L)
                        .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                                .setCurrency("eur")
                                .setUnitAmount(amount * 100)
                                .setProductData(SessionCreateParams.LineItem.PriceData.ProductData
                                        .builder().setName("Aziz Payment").build()
                                ).build()
                        ).build()
                ).build();

        Session session = Session.create(params);

        return "";
    }
}
