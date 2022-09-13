package com.kaankaplan.movieService.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name= "director")
public class Director {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int directorId;

    private String directorName;

    @OneToMany(mappedBy = "director")
    private List<Movie> movieList;
}
