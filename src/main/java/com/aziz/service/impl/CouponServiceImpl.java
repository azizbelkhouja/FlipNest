package com.aziz.service.impl;

import com.aziz.modal.Cart;
import com.aziz.modal.Coupon;
import com.aziz.modal.User;
import com.aziz.repository.CouponRepository;
import com.aziz.service.CouponService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CouponServiceImpl implements CouponService {

    private final CouponRepository couponRepository;


    @Override
    public Cart applyCoupon(String code, double orderValue, User user) {



        return null;
    }

    @Override
    public Cart removeCoupon(String code, User user) {
        return null;
    }

    @Override
    public Coupon findCouponById(Long id) {
        return null;
    }

    @Override
    public Coupon createCoupon(Coupon coupon) {
        return null;
    }

    @Override
    public List<Coupon> findAllCoupons() {
        return List.of();
    }

    @Override
    public void deleteCoupon(Long id) {

    }
}
