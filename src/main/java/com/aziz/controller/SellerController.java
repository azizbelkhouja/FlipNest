package com.aziz.controller;

import com.aziz.modal.VerificationCode;
import com.aziz.repository.VerificationCodeRepository;
import com.aziz.response.ApiResponse;
import com.aziz.response.AuthResponse;
import com.aziz.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/sellers")

public class SellerController {

    private final SellerService sellerService;
    private final VerificationCodeRepository verificationCodeRepository;

    public ResponseEntity<AuthResponse> LoginSeller (
            @RequestBody VerificationCode req
    ) throws Exception {
        String otp = req.getOtp();
        String email = req.getEmail();

        VerificationCode verificationCode = verificationCodeRepository.findByEmail(email);
        if (verificationCode == null || !verificationCode.getOtp().equals(req.getOtp())) {
            throw new Exception("wrong otp");
        }
    }
}
