package com.kaankaplan.movieService.business.concretes;

import com.kaankaplan.movieService.business.abstracts.CommentService;
import com.kaankaplan.movieService.business.abstracts.MovieService;
import com.kaankaplan.movieService.dao.CommentDao;
import com.kaankaplan.movieService.entity.Comment;
import com.kaankaplan.movieService.entity.dto.MovieResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {

    private final CommentDao commentDao;
    private final WebClient webClient;

    @Override
    public List<Comment> getCommentsByMovieId(int movieId, int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo-1, pageSize);
        return commentDao.getCommentsByMovieMovieId(movieId, pageable);
    }

    @Override
    public void deleteComment(int id) {
        commentDao.deleteById(id);
    }

    @Override
    public void addComment(Comment comment, String userId) {

        Boolean result = webClient.get()
                .uri("http:localhost:8081/api/v1/customers/isExist/" + userId)
                .retrieve()
                .bodyToMono(Boolean.class)
                .block();


        commentDao.save(comment);
    }
}
