package com.aziz.service;

import com.aziz.modal.User;

public interface UserService {

    User findUserByJwtToken(String jwt);
    User findUserByEmail(String email);
}
