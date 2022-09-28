package com.kaankaplan.movieService.business.abstracts;

import com.kaankaplan.movieService.entity.Comment;

import java.util.List;

public interface CommentService {

    List<Comment> getCommentsByMovieId(int movieId, int pageNo, int pageSize);

    void deleteComment(int id);

    void addComment(Comment comment, String userId);
}
