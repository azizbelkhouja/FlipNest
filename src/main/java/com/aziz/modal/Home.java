package com.aziz.modal;

import lombok.Data;

import java.util.List;

@Data
public class Home {

    private List<HomeCategory> grid;
    private List<HomeCategory> shopByCategory;
    private List<HomeCategory> electronicCategories;
    private List<HomeCategory> dealsCategories;
}
