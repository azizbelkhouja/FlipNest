package com.aziz.service;

import com.aziz.response.SignupRequest;

public interface AuthService {

    void sendOtp(String email) throws Exception;

    String createUser(SignupRequest req) throws Exception;
}
