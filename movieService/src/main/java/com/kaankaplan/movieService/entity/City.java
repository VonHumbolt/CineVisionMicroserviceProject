package com.kaankaplan.movieService.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "city")
@Builder
public class City implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cityId;
    private String cityName;

    @OneToMany(mappedBy = "city")
    private List<Saloon> saloon;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    @JsonIgnore
    private Movie movie;
}
