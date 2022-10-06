package com.kaankaplan.movieService.dao;

import com.kaankaplan.movieService.entity.Comment;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentDao extends JpaRepository<Comment, Integer> {

    List<Comment> getCommentsByMovieMovieId(int movieId, Pageable pageable);

    int countCommentByMovieMovieId(int movieId);
}
