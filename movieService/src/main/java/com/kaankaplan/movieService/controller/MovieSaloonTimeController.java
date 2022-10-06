package com.kaankaplan.movieService.controller;

import com.kaankaplan.movieService.business.abstracts.MovieSaloonTimeService;
import com.kaankaplan.movieService.entity.MovieSaloonTime;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movie/movieSaloonTimes/")
@RequiredArgsConstructor
//@CrossOrigin
public class MovieSaloonTimeController {

    private final MovieSaloonTimeService movieSaloonTimeService;

    @GetMapping("getMovieSaloonTimeSaloonAndMovieId/{saloonId}/{movieId}")
    public List<MovieSaloonTime> getMovieSaloonTimeSaloonAndMovieId(@PathVariable int saloonId,
                                                                    @PathVariable int movieId) {
       return movieSaloonTimeService.getMovieSaloonTimeSaloonAndMovieId(saloonId, movieId);
    }
}
