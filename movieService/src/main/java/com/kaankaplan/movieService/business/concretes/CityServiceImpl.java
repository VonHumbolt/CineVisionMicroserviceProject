package com.kaankaplan.movieService.business.concretes;

import com.kaankaplan.movieService.business.abstracts.CityService;
import com.kaankaplan.movieService.dao.CityDao;
import com.kaankaplan.movieService.entity.City;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CityServiceImpl implements CityService {

    private final CityDao cityDao;

    @Override
    public List<City> getCitiesByMovieId(int movieId) {
        return cityDao.getCitiesByMovieMovieId(movieId);
    }
}
