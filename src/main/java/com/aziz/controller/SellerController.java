package com.aziz.controller;

import com.aziz.modal.VerificationCode;
import com.aziz.repository.VerificationCodeRepository;
import com.aziz.request.LoginRequest;
import com.aziz.response.ApiResponse;
import com.aziz.response.AuthResponse;
import com.aziz.service.AuthService;
import com.aziz.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/seller")

public class SellerController {

    private final SellerService sellerService;
    private final VerificationCodeRepository verificationCodeRepository;
    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> LoginSeller (
            @RequestBody LoginRequest req
    ) throws Exception {
        String otp = req.getOtp();
        String email = req.getEmail();
        

        req.setEmail("Seller_" + email);
        AuthResponse authResponse = authService.signin(req);

        return ResponseEntity.ok(authResponse);
    }
}
