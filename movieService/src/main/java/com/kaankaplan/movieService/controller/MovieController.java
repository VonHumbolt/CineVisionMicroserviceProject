package com.kaankaplan.movieService.controller;

import com.kaankaplan.movieService.business.abstracts.MovieService;
import com.kaankaplan.movieService.entity.Movie;
import com.kaankaplan.movieService.entity.dto.MovieRequestDto;
import com.kaankaplan.movieService.entity.dto.MovieResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movie/movies/")
@RequiredArgsConstructor
//@CrossOrigin
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

    @GetMapping("{movieId}")
    public MovieResponseDto getMovieById(@PathVariable int movieId){
        return movieService.getMovieByMovieId(movieId);
    }

    @PostMapping("add")
    public Movie addMovie(@RequestBody MovieRequestDto movieRequestDto){
        return movieService.addMovie(movieRequestDto);
    }
}