package com.kaankaplan.userService.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class User {
    @Id
    private String userId;
    @Indexed(unique = true)
    private String email;
    private String password;
    private Claim claim;
}
