package com.aziz.service.impl;

import com.aziz.domain.USER_ROLE;
import com.aziz.modal.User;
import com.aziz.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;
import java.util.List;

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

        if(role == null) role = USER_ROLE.ROLE_CUSTOMER;

        List<GrantedAuthority> authorityList = new ArrayList<>();
        authorityList.add(new SimpleGrantedAuthority("ROLE_" + role));

        return new org.springframework.security.core.userdetails.User (
                email,
                password,
                authorityList
        );
        
    }
}
