package com.aziz.controller;

import com.aziz.modal.PaymentOrder;
import com.aziz.modal.SellerReport;
import com.aziz.modal.User;
import com.aziz.response.ApiResponse;
import com.aziz.response.PaymentLinkResponse;
import com.aziz.service.OrderService;
import com.aziz.service.PaymentService;
import com.aziz.service.SellerService;
import com.aziz.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    private final PaymentService paymentService;
    private final UserService userService;
    private final SellerService sellerService;
    private OrderService orderService;
    private final SellerReport sellerReport;

    @GetMapping("/{paymentId}")
    public ResponseEntity<ApiResponse> paymentSuccessHandler(
            @PathVariable String paymentId,
            @RequestParam String paymentLinkId,
            @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        PaymentLinkResponse paymentResponse;

        PaymentOrder paymentOrder = paymentService
                .getPaymentOrderByPaymentId(paymentLinkId);

        boolean paymentSuccess = paymentService.ProceedPaymentOrder(
                paymentOrder,
                paymentId,
                paymentLinkId
        );

    }



}
