package com.kaankaplan.movieService.controller;

import com.kaankaplan.movieService.business.abstracts.MovieImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/movie/images/")
@RequiredArgsConstructor
@CrossOrigin
public class MovieImageController {

    private final MovieImageService movieImageService;

    @GetMapping("add/{movieId}")
    public void add(@PathVariable int movieId, @RequestParam String imageUrl) {
        movieImageService.addMovieImage(imageUrl, movieId);
    }
}
