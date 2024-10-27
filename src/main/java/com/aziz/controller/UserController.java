package com.aziz.controller;

import com.aziz.domain.USER_ROLE;
import com.aziz.modal.User;
import com.aziz.response.AuthResponse;
import com.aziz.response.SignupRequest;
import com.aziz.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {


    private final UserServiceImpl userServiceImpl;

    @GetMapping("/user/profile")
    public ResponseEntity<User> createUserHandler(@RequestHeader("Authorization") String jwt) throws Exception {

        User user = userServiceImpl.findUserByJwtToken(jwt);

        return ResponseEntity.ok(user);
    }

}
