package com.kaankaplan.movieService.business.abstracts;

import com.kaankaplan.movieService.entity.City;
import com.kaankaplan.movieService.entity.dto.CityRequestDto;

import java.util.List;

public interface CityService {

    List<City> getCitiesByMovieId(int movieId);

    List<City> getall();

    void add(CityRequestDto cityRequestDto);
}
