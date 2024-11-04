package com.aziz.controller;


import com.aziz.service.OrderService;
import com.aziz.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/orders")
public class Ordercontroller {

    private final OrderService orderService;
    private final UserService userService;

    
}
