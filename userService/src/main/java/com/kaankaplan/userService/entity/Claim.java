package com.kaankaplan.userService.entity;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@Builder
public class Claim {

    @Id
    private String claimId;
    private String claimName;
}
