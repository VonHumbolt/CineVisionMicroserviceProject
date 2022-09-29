package com.kaankaplan.movieService.dao;

import com.kaankaplan.movieService.entity.Director;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DirectorDao extends JpaRepository<Director, Integer> {

    Director getDirectorByDirectorId(int directorId);
}
