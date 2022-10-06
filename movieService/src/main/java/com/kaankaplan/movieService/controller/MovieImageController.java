package com.kaankaplan.movieService.controller;

import com.kaankaplan.movieService.business.abstracts.MovieImageService;
import com.kaankaplan.movieService.entity.dto.ImageRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/movie/images/")
@RequiredArgsConstructor
//@CrossOrigin
public class MovieImageController {

    private final MovieImageService movieImageService;

    @GetMapping("add")
    public void add(@RequestBody ImageRequestDto imageRequestDto) {
        movieImageService.addMovieImage(imageRequestDto);
    }
}
