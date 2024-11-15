package com.aziz.service.impl;

import com.aziz.modal.Home;
import com.aziz.modal.HomeCategory;
import com.aziz.service.HomeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HomeServiceImpl implements HomeService {


    @Override
    public Home createHomePageData(List<HomeCategory> allCategories) {
        return null;
    }
}
