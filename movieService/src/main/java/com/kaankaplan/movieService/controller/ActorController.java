package com.kaankaplan.movieService.controller;

import com.kaankaplan.movieService.business.abstracts.ActorService;
import com.kaankaplan.movieService.entity.Actor;
import com.kaankaplan.movieService.entity.dto.ActorRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/actors/")
@RequiredArgsConstructor
@CrossOrigin
public class ActorController {

    private final ActorService actorService;

    @GetMapping("getActorsByMovieId/{movieId}")
    public List<Actor> getActorsByMovieId(@PathVariable int movieId) {
       return actorService.getActorsByMovieId(movieId);
    }

    @GetMapping("getall")
    public List<Actor> getall() {
       return actorService.getall();
    }

    @PostMapping("add")
    public void add(@RequestBody ActorRequestDto actorRequestDto) {
        actorService.addActors(actorRequestDto);
    }
}
