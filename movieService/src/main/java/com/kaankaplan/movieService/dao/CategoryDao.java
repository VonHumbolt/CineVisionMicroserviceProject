package com.kaankaplan.movieService.dao;

import com.kaankaplan.movieService.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryDao extends JpaRepository<Category, Integer> {

    Category getCategoryByCategoryId(int categoryId);
}
