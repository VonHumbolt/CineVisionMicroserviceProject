package com.kaankaplan.userService.business.abstracts;

import com.kaankaplan.userService.entity.Claim;

public interface ClaimService {

    Claim getClaimByClaimName(String claimName);
}
