package com.kaankaplan.userService.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Claim {

    @Id
    private String claimId;
    private String claimName;
}
