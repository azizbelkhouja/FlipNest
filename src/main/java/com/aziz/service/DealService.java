package com.aziz.service;

import com.aziz.modal.Deal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DealService {

    List<Deal> getDeals();
    Deal createDeal(Deal deal);
    Deal updateDeal(Deal deal);
    void deleteDeal(Deal deal);
}
