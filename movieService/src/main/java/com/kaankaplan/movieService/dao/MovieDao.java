package com.kaankaplan.movieService.dao;

import com.kaankaplan.movieService.entity.Movie;
import com.kaankaplan.movieService.entity.dto.MovieResponseDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieDao extends JpaRepository<Movie, Integer> {

    @Query("Select new com.kaankaplan.movieService.entity.dto.MovieResponseDto(m.movieId, m.movieName, m.description, m.duration," +
            "m.releaseDate, m.isDisplay, c.categoryId, c.categoryName, i.imageUrl, m.movieTrailerUrl, d.directorName" +
            ") " +
            "From Movie m inner join m.category c on m.category.categoryId=c.categoryId " +
            "inner join m.director d on m.director.directorId=d.directorId " +
            "inner join m.image i on m.image.imageId=i.imageId where m.isDisplay=true and m.releaseDate <= current_date")
    List<MovieResponseDto> getAllDisplayingMoviesInVision();

    @Query("select new com.kaankaplan.movieService.entity.dto.MovieResponseDto(" +
            "m.movieId, m.movieName, m.description, m.duration, m.releaseDate, m.isDisplay," +
            "c.categoryId, c.categoryName, i.imageUrl, m.movieTrailerUrl, d.directorName) from Movie m" +
            " inner join m.image i on m.image.imageId=i.imageId" +
            " inner join m.director d on m.director.directorId=d.directorId" +
            " inner join m.category c on m.category.categoryId=c.categoryId" +
            " where m.isDisplay=false and m.releaseDate > current_date")
    List<MovieResponseDto> getAllComingSoonMovies();

    @Query("select new com.kaankaplan.movieService.entity.dto.MovieResponseDto(" +
            "m.movieId, m.movieName, m.description, m.duration, m.releaseDate, m.isDisplay," +
            "c.categoryId, c.categoryName, i.imageUrl, m.movieTrailerUrl, d.directorName) from Movie m" +
            " inner join m.image i on m.image.imageId=i.imageId" +
            " inner join m.director d on m.director.directorId=d.directorId" +
            " inner join m.category c on m.category.categoryId=c.categoryId" +
            " where m.movieId=:movieId")
    MovieResponseDto getMovieById(@Param("movieId") int movieId);

    Movie getMovieByMovieId(int movieId);
}
