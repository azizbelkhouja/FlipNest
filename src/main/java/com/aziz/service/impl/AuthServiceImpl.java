package com.aziz.service.impl;

import com.aziz.repository.UserRepository;
import com.aziz.response.SignupRequest;
import com.aziz.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    
    @Override
    public String createUser(SignupRequest req) {
        return "";
    }
}
