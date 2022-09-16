package com.kaankaplan.movieService.business.abstracts;

import com.kaankaplan.movieService.entity.MovieSaloonTime;

import java.util.List;

public interface MovieSaloonTimeService {

    List<MovieSaloonTime> getMovieSaloonTimeSaloonAndMovieId(int saloonId, int movieId);
}
