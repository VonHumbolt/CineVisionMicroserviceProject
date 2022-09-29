package com.kaankaplan.movieService.dao;

import com.kaankaplan.movieService.entity.MovieImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieImageDao extends JpaRepository<MovieImage, Integer> {
}
