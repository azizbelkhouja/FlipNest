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

    @PostMapping("/sent/login-otp")
    public ResponseEntity<ApiResponse> sentOtpHandler(@RequestBody VerificationCode req) throws Exception {

        authService.sendOtp(req.getEmail());

        ApiResponse res = new ApiResponse();
        res.setMessage("Code Sent Successfully");

        return ResponseEntity.ok(res);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> LoginSeller (
            @RequestBody LoginRequest req
    ) throws Exception {
        String otp = req.getOtp();
        String email = req.getEmail();

//        VerificationCode verificationCode = verificationCodeRepository.findByEmail(email);
//        if (verificationCode == null || !verificationCode.getOtp().equals(req.getOtp())) {
//            throw new Exception("wrong otp");
//        }

        req.setEmail("Seller_" + email);
        AuthResponse authResponse = authService.signin(req);

        return ResponseEntity.ok(authResponse);
    }
}
