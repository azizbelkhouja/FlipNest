package com.aziz.service.impl;

import com.aziz.modal.Cart;
import com.aziz.modal.Coupon;
import com.aziz.modal.User;
import com.aziz.repository.CartRepository;
import com.aziz.repository.CouponRepository;
import com.aziz.repository.UserRepository;
import com.aziz.service.CouponService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CouponServiceImpl implements CouponService {

    private final CouponRepository couponRepository;
    private final CartRepository cartRepository;
    private final UserRepository userRepository;


    @Override
    public Cart applyCoupon(String code, double orderValue, User user) throws Exception {

        Coupon coupon = couponRepository.findByCode(code);
        Cart cart = cartRepository.findByUserId(user.getId());

        if (coupon == null) {
            throw new Exception("coupon not valid");
        }
        if (user.getUsedCoupons().contains(coupon)) {
            throw new Exception("coupon already used");
        }
        if (orderValue < coupon.getMinimumOrderValue()) {
            throw new Exception("minimum orders are " + coupon.getMinimumOrderValue());
        }
        if  (    coupon.isActive() &&
                 LocalDate.now().isAfter(coupon.getValidityStartDate()) &&
                 LocalDate.now().isBefore(coupon.getValidityEndDate())
            )
        {
            user.getUsedCoupons().add(coupon);
            userRepository.save(user);

            double discountedPrice = ( cart.getTotalSellingPrice() * coupon.getDiscountPercentage() ) / 100 ;
            cart.setTotalSellingPrice(cart.getTotalSellingPrice() - discountedPrice);
            cart.setCouponCode(code);
            cartRepository.save(cart);
            return cart;
        }

        throw new Exception("coupon not valid");
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
