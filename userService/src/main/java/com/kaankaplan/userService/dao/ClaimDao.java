package com.kaankaplan.userService.dao;

import com.kaankaplan.userService.entity.Claim;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ClaimDao extends MongoRepository<Claim, String> {

    Claim getClaimByClaimName(String claimName);
}
