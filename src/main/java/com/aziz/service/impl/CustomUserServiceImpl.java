package com.aziz.service.impl;

import com.aziz.domain.USER_ROLE;
import com.aziz.modal.User;
import com.aziz.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class CustomUserServiceImpl implements UserDetailsService {


    private UserRepository userRepository;
    private static final String SELLER_PREFIX = "Seller_";


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        if (username.startsWith(SELLER_PREFIX)) {

        } else {
            User user = userRepository.findByEmail(username);

            if (user != null) {
                return buildUserDetails(user.getEmail(), user.getPassword(), user.getRole());
            }
        }

        return null;
    }

    private UserDetails buildUserDetails(String email, String password, USER_ROLE role) {

        
    }
}
