package com.kaankaplan.movieService.controller;

import com.kaankaplan.movieService.business.abstracts.CityService;
import com.kaankaplan.movieService.entity.City;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cities/")
@RequiredArgsConstructor
@CrossOrigin
public class CityController {

    private final CityService cityService;

    @GetMapping("getCitiesByMovieId/{movieId}")
    public List<City> getCitiesByMovieId(@PathVariable int movieId) {
       return cityService.getCitiesByMovieId(movieId);
    }
}
