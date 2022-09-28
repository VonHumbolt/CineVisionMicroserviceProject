package com.kaankaplan.movieService.controller;

import com.kaankaplan.movieService.business.abstracts.CommentService;
import com.kaankaplan.movieService.entity.Comment;
import com.kaankaplan.movieService.entity.dto.CommentRequestDto;
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

    @PostMapping("add")
    public void addComment(@RequestBody CommentRequestDto comment) {
        commentService.addComment(comment);
    }

    @PostMapping("delete/{commentId}")
    public void deleteComment(@PathVariable int commentId) {
        commentService.deleteComment(commentId);
    }
}
