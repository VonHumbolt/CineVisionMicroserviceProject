package com.kaankaplan.movieService.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeleteCommentRequestDto {
    private int commentId;
    private String token;
}
