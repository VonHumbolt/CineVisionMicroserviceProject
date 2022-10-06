package com.kaankaplan.movieService.business.abstracts;

import com.kaankaplan.movieService.entity.Director;
import com.kaankaplan.movieService.entity.dto.DirectorRequestDto;

import java.util.List;

public interface DirectorService {

    List<Director> getall();

    Director getDirectorById(int directorId);

    Director add(DirectorRequestDto directorRequestDto);
}
