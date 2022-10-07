package com.kaankaplan.movieService.controller;

import com.kaankaplan.movieService.business.abstracts.CommentService;
import com.kaankaplan.movieService.entity.Comment;
import com.kaankaplan.movieService.entity.dto.CommentRequestDto;
import com.kaankaplan.movieService.entity.dto.DeleteCommentRequestDto;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movie/comments/")
@CrossOrigin
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @GetMapping("getCommentsByMovieId/{movieId}/{pageNo}/{pageSize}")
    public List<Comment> getCommentsByMovieId(@PathVariable int movieId, @PathVariable int pageNo, @PathVariable int pageSize) {
        return commentService.getCommentsByMovieId(movieId, pageNo, pageSize);
    }

    @GetMapping("getCountOfComments/{movieId}")
    public int getNumberOfCommentsByMovieId(@PathVariable int movieId) {
        return commentService.getNumberOfCommentsByMovieId(movieId);
    }

    @PostMapping("add")
    @CircuitBreaker(name = "comment", fallbackMethod = "fallback")
    @Retry(name="comment")
    public Comment addComment(@RequestBody CommentRequestDto comment) {
        return commentService.addComment(comment);
    }

    @PostMapping("delete")
    public void deleteComment(@RequestBody DeleteCommentRequestDto deleteCommentRequestDto) {
        commentService.deleteComment(deleteCommentRequestDto);
    }
    private Comment fallback(CommentRequestDto commentRequestDto, RuntimeException runtimeException) throws RuntimeException{
        return null;
    }

}
