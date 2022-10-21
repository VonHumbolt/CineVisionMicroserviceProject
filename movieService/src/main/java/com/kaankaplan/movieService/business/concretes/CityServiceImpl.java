package com.kaankaplan.movieService.business.concretes;

import com.kaankaplan.movieService.business.abstracts.CityService;
import com.kaankaplan.movieService.business.abstracts.MovieService;
import com.kaankaplan.movieService.dao.CityDao;
import com.kaankaplan.movieService.entity.City;
import com.kaankaplan.movieService.entity.Movie;
import com.kaankaplan.movieService.entity.dto.CityRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CityServiceImpl implements CityService {

    private final CityDao cityDao;
    private final MovieService movieService;
    private final WebClient.Builder webClientBuilder;


    @Override
    public List<City> getCitiesByMovieId(int movieId) {
        return cityDao.getCitiesByMovieMovieId(movieId);
    }

    @Cacheable(value = "cities")
    @Override
    public List<City> getall() {
        return cityDao.findAll(Sort.by(Sort.Direction.ASC, "cityName"));
    }

    @CacheEvict(value = "cities", allEntries = true)
    @Override
    public void add(CityRequestDto cityRequestDto) {
        Boolean result = webClientBuilder.build().get()
                .uri("http://USERSERVICE/api/user/isUserAdmin")
                .header("Authorization", "Bearer " + cityRequestDto.getToken())
                .retrieve()
                .bodyToMono(Boolean.class)
                .block();
        if (result) {
            Movie movie = movieService.getMovieById(cityRequestDto.getMovieId());
            for (String cityName: cityRequestDto.getCityNameList()) {
                City city = City.builder()
                        .cityName(cityName)
                        .movie(movie)
                        .build();
                cityDao.save(city);
            }
        }
    }
}
