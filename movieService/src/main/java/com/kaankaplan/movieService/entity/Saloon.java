package com.kaankaplan.movieService.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="saloon")
public class Saloon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int saloonId;
    private String saloonName;

    @ManyToOne
    @JoinColumn(name = "city_id")
    @JsonIgnore
    private City city;

}
