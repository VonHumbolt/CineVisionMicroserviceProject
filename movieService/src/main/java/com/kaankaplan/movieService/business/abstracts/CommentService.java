package com.kaankaplan.movieService.business.abstracts;

import com.kaankaplan.movieService.entity.Comment;
import com.kaankaplan.movieService.entity.dto.CommentRequestDto;
import com.kaankaplan.movieService.entity.dto.DeleteCommentRequestDto;

import java.util.List;

public interface CommentService {

    List<Comment> getCommentsByMovieId(int movieId, int pageNo, int pageSize);

    void deleteComment(DeleteCommentRequestDto deleteCommentRequestDto);

    Comment addComment(CommentRequestDto commentRequestDto);

    int getNumberOfCommentsByMovieId(int movieId);
}
