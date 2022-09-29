package com.kaankaplan.movieService.business.abstracts;

import com.kaankaplan.movieService.entity.Category;

import java.util.List;

public interface CategoryService {

    List<Category> getall();

    Category getCategoryById(int categoryId);
}
