package com.aziz.service.impl;

import com.aziz.modal.HomeCategory;
import com.aziz.repository.HomeCategoryRepository;
import com.aziz.service.HomeCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HomeCategoryServiceImpl implements HomeCategoryService {

    private final HomeCategoryRepository homeCategoryRepository;


    @Override
    public HomeCategory createHomeCategory(HomeCategory homeCategory) {
        return homeCategoryRepository.save(homeCategory);
    }

    @Override
    public List<HomeCategory> createCategories(List<HomeCategory> homeCategories) {
        return List.of();
    }

    @Override
    public HomeCategory updateHomeCategory(HomeCategory homeCategory, Long id) {
        return null;
    }

    @Override
    public List<HomeCategory> getAllHomeCategories() {
        return List.of();
    }
}
