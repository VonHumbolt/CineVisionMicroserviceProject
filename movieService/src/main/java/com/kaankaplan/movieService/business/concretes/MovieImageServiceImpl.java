package com.kaankaplan.movieService.business.concretes;

import com.kaankaplan.movieService.business.abstracts.CategoryService;
import com.kaankaplan.movieService.business.abstracts.MovieImageService;
import com.kaankaplan.movieService.dao.CategoryDao;
import com.kaankaplan.movieService.dao.MovieImageDao;
import com.kaankaplan.movieService.entity.Category;
import com.kaankaplan.movieService.entity.MovieImage;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieImageServiceImpl implements MovieImageService {

    private final MovieImageDao movieImageDao;

    @Override
    public MovieImage addMovieImage(String imageUrl) {

        MovieImage image = new MovieImage();
        image.setImageUrl(imageUrl);

        return movieImageDao.save(image);
    }
}
