package com.kaankaplan.movieService.business.concretes;

import com.kaankaplan.movieService.business.abstracts.MovieImageService;
import com.kaankaplan.movieService.business.abstracts.MovieService;
import com.kaankaplan.movieService.dao.MovieImageDao;
import com.kaankaplan.movieService.entity.Movie;
import com.kaankaplan.movieService.entity.MovieImage;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class MovieImageServiceImpl implements MovieImageService {

    private final MovieImageDao movieImageDao;
    private final MovieService movieService;

    @Override
    public MovieImage addMovieImage(String imageUrl, int movieId) {

        Movie movie = movieService.getMovieById(movieId);

        MovieImage image = new MovieImage();
        image.setImageUrl(imageUrl);
        image.setMovie(movie);

        return movieImageDao.save(image);
    }
}
