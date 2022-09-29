package com.kaankaplan.movieService.business.abstracts;

import com.kaankaplan.movieService.entity.Director;

import java.util.List;

public interface DirectorService {

    List<Director> getall();

    Director getDirectorById(int directorId);
}
