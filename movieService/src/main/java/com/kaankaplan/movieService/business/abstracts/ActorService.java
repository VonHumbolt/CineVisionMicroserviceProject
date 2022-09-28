package com.kaankaplan.movieService.business.abstracts;

import com.kaankaplan.movieService.entity.Actor;
import java.util.List;

public interface ActorService {

    List<Actor> getActorsByMovieId(int movieId);

    List<Actor> getall();
}
