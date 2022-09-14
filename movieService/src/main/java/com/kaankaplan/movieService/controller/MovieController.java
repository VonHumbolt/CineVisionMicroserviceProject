package com.kaankaplan.movieService.controller;

import com.kaankaplan.movieService.business.abstracts.MovieService;
import com.kaankaplan.movieService.entity.Movie;
import com.kaankaplan.movieService.entity.dto.MovieResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/movies/")
@RequiredArgsConstructor
@CrossOrigin
public class MovieController {

    private final MovieService movieService;

    @GetMapping("displayingMovies")
    public List<MovieResponseDto> getAllDisplayingMoviesInVision() {
       return movieService.getAllDisplayingMoviesInVision();
    }

    @GetMapping("comingSoonMovies")
    public List<MovieResponseDto> getAllComingSoonMovies(){
        return movieService.getAllComingSoonMovies();
    }
}
