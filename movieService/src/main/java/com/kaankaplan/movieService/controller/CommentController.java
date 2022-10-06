package com.kaankaplan.movieService.controller;

import com.kaankaplan.movieService.business.abstracts.CommentService;
import com.kaankaplan.movieService.entity.Comment;
import com.kaankaplan.movieService.entity.dto.CommentRequestDto;
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

    @PostMapping("add")
    @CircuitBreaker(name = "comment", fallbackMethod = "fallback")
    @Retry(name="comment")
    public String addComment(@RequestBody CommentRequestDto comment) {
        commentService.addComment(comment);
        return "Yorum başarıyla eklendi";
    }

    @PostMapping("delete/{commentId}")
    public void deleteComment(@PathVariable int commentId) {
        commentService.deleteComment(commentId);
    }
    private String fallback(CommentRequestDto commentRequestDto, RuntimeException runtimeException) {
        return "Bağlantı hatası";
    }

}
