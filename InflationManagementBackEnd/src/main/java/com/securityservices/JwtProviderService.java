package com.securityservices;


import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Service
public class JwtProviderService {
    Key key = Keys.secretKeyFor(SignatureAlgorithm.HS512);
    @Value("86400000")
    private int jwtExpirationInMs;

    public String generateToken(@NotNull Authentication authentication) {
        String principal = (String) authentication.getPrincipal();
        Instant now = Instant.now();
        Instant expiryDate = now.plus(jwtExpirationInMs, ChronoUnit.MILLIS);

        return Jwts.builder()
                .setSubject(principal)
                .setIssuedAt(Date.from(now))
                .setExpiration(Date.from(expiryDate))
                .signWith(key)
                .compact();
    }

    public String addConnectedUserToToken(String token, int userId) {
        Claims claims = Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody();
        return Jwts.builder()
                .setSubject(claims.getSubject())
                .setIssuedAt(claims.getIssuedAt())
                .setExpiration(claims.getExpiration())
                .claim("user_id", userId)
                .signWith(key)
                .compact();
    }

    public int getUserIdFromJWT(String token) {
        return (int) Jwts.parser().setSigningKey(key)
                .parseClaimsJws(token)
                .getBody()
                .get("user_id");
    }

    public String getAccountOwnerLoginFromJWT(String token) {
        return Jwts.parser().setSigningKey(key)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public boolean isTokenValid(String authToken) {
        try {
            Jwts.parser()
                    .setSigningKey(key)
                    .parseClaimsJws(authToken);
            return true;
        } catch ( MalformedJwtException | ExpiredJwtException | UnsupportedJwtException |
                  IllegalArgumentException ignored) {
            return false;
        }
    }
}