package com.kaankaplan.movieService.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "actor")
@Builder
public class Actor implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int actorId;

    private String actorName;

    @ManyToOne
    @JsonIgnore
    private Movie movie;

    @OneToOne(mappedBy = "actor")
    @JoinColumn(name = "actor_image_id")
    private ActorImage actorImage;
}
