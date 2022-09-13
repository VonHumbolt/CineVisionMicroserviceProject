package com.kaankaplan.movieService.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "actor")
public class Actor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int actorId;

    private String actorName;

    @ManyToOne
    private Movie movie;

    @OneToOne(mappedBy = "actor")
    private ActorImage actorImage;
}
