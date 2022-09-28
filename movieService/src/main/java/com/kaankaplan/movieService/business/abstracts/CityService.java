package com.kaankaplan.movieService.business.abstracts;

import com.kaankaplan.movieService.entity.City;

import java.util.List;

public interface CityService {

    List<City> getCitiesByMovieId(int movieId);

    List<City> getall();
}
