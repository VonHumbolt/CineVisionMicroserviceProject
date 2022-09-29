package com.kaankaplan.movieService.business.abstracts;

import com.kaankaplan.movieService.entity.Actor;
import com.kaankaplan.movieService.entity.dto.ActorRequestDto;

import java.util.List;

public interface ActorService {

    List<Actor> getActorsByMovieId(int movieId);

    List<Actor> getall();

    void addActors(ActorRequestDto actorRequestDto);
}
