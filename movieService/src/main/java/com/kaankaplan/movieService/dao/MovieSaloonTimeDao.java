package com.kaankaplan.movieService.dao;

import com.kaankaplan.movieService.entity.MovieSaloonTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieSaloonTimeDao extends JpaRepository<MovieSaloonTime, Integer> {

    List<MovieSaloonTime> getMovieSaloonTimeBySaloonSaloonIdAndMovieMovieId(int saloonId, int movieId);

}
