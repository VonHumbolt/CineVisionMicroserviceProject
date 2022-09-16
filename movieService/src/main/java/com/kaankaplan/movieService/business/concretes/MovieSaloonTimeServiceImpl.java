package com.kaankaplan.movieService.business.concretes;

import com.kaankaplan.movieService.business.abstracts.MovieSaloonTimeService;
import com.kaankaplan.movieService.dao.MovieSaloonTimeDao;
import com.kaankaplan.movieService.entity.MovieSaloonTime;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieSaloonTimeServiceImpl implements MovieSaloonTimeService {

    private final MovieSaloonTimeDao movieSaloonTimeDao;

    @Override
    public List<MovieSaloonTime> getMovieSaloonTimeSaloonAndMovieId(int saloonId, int movieId) {
        return movieSaloonTimeDao.getMovieSaloonTimeBySaloonSaloonIdAndMovieMovieId(saloonId, movieId);
    }
}
