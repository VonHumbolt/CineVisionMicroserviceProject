package com.kaankaplan.movieService.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MovieRequestDto {

    private String movieName;
    private String description;
    private int duration;
    private Date releaseDate;
    private String trailerUrl;
    private boolean isInVision;
    private int categoryId;
    private int directorId;
    private List<Integer> actors;
    private List<Integer> cities;
    private String userAccessToken;
}
