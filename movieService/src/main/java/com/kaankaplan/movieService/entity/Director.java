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
@Builder
@Entity
@Table(name= "director")
public class Director implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int directorId;

    private String directorName;

    @OneToMany(mappedBy = "director")
    @JsonIgnore
    private List<Movie> movieList;
}
