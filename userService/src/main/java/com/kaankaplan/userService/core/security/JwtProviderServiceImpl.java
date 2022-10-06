package com.kaankaplan.userService.core.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;

@Service
@RequiredArgsConstructor
public class JwtProviderServiceImpl implements JwtProviderService{

    @Value("${jwt.secret.key}")
    private String key;

    public String generateToken(Authentication authentication) {

        String token = Jwts.builder()
                .claim("authorities", authentication.getAuthorities())
                .setSubject(authentication.getName())
                .setIssuedAt(new Date())
                .setExpiration(java.sql.Date.valueOf(LocalDate.now().plusWeeks(2)))
                .signWith(Keys.hmacShaKeyFor(key.getBytes()))
                .compact();

        return token;
    }

}
