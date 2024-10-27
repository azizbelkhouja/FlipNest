package com.aziz.service;

import com.aziz.request.LoginRequest;
import com.aziz.response.AuthResponse;
import com.aziz.response.SignupRequest;

public interface AuthService {

    void sendOtp(String email) throws Exception;

    String createUser(SignupRequest req) throws Exception;

    AuthResponse signin(LoginRequest req);
}
