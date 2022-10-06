package com.kaankaplan.movieService.business.abstracts;

import com.kaankaplan.movieService.entity.MovieImage;
import com.kaankaplan.movieService.entity.dto.ImageRequestDto;


public interface MovieImageService {

    MovieImage addMovieImage(ImageRequestDto imageRequestDto);
}
