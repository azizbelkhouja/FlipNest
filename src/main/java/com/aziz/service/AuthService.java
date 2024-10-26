package com.aziz.service;

import com.aziz.response.SignupRequest;

public interface AuthService {

    String createUser(SignupRequest req) throws Exception;
}
