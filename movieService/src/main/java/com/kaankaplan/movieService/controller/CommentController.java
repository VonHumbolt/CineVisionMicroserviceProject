package com.kaankaplan.movieService.controller;

import com.kaankaplan.movieService.business.abstracts.CommentService;
import com.kaankaplan.movieService.entity.Comment;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/comments/")
@CrossOrigin
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @GetMapping("getCommentsByMovieId/{movieId}/{pageNo}/{pageSize}")
    public List<Comment> getCommentsByMovieId(@PathVariable int movieId, @PathVariable int pageNo, @PathVariable int pageSize) {
        return commentService.getCommentsByMovieId(movieId, pageNo, pageSize);
    }

    @PostMapping("add/{userId}")
    public void addComment(@RequestBody Comment comment, @PathVariable String userId) {
        commentService.addComment(comment, userId);
    }

    @PostMapping("delete/{commentId}")
    public void deleteComment(@PathVariable int commentId) {
        commentService.deleteComment(commentId);
    }
}
