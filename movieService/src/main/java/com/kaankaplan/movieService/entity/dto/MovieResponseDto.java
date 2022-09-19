package com.kaankaplan.movieService.entity.dto;

import com.kaankaplan.movieService.entity.Actor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MovieResponseDto {

    private int movieId;
    private String movieName;
    private String description;
    private int duration;
    private Date releaseDate;
    private boolean isDisplay;

    private int categoryId;
    private String categoryName;

    private String movieImageUrl;
    private String movieTrailerUrl;

    private String directorName;

//    private List<Actor> actors;

}
