package com.kaankaplan.movieService.business.concretes;

import com.kaankaplan.movieService.business.abstracts.ActorService;
import com.kaankaplan.movieService.dao.ActorDao;
import com.kaankaplan.movieService.entity.Actor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ActorServiceImpl implements ActorService {

    private final ActorDao actorDao;

    @Override
    public List<Actor> getActorsByMovieId(int movieId) {
        return actorDao.getActorsByMovieMovieId(movieId);
    }
}
