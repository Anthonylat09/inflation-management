package com.repositories;

import com.entities.User;
import com.securityservices.PasswordEncoderService;
import com.services.UserService;
import jakarta.validation.constraints.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AccountExpiredException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class AuthenticationRepository implements AuthenticationManager {
    final UserService userService;
    final PasswordEncoderService passwordEncoderService;

    private final Logger logger = LoggerFactory.getLogger(AuthenticationRepository.class);

    public AuthenticationRepository(UserService userService, PasswordEncoderService passwordEncoderService) {
        this.userService = userService;
        this.passwordEncoderService = passwordEncoderService;
    }

    @Override
    public Authentication authenticate(@NotNull Authentication authentication) throws UsernameNotFoundException, BadCredentialsException, AccountExpiredException {
        final Optional<User> user = Optional.ofNullable(this.userService.getUserByEmail((String) authentication.getPrincipal()));
        user.ifPresent(a -> logger.info("User with email {} tried to authenticate", a.getEmail()));
        if (user.isEmpty()) {
            logger.error("The user with email {} has not been found", authentication.getPrincipal());
            throw new UsernameNotFoundException("LOGIN.USERNAME_NOT_FOUND");
        } else if (!this.passwordEncoderService.matches(authentication.getCredentials().toString(), user.get().getPassword())) {
            logger.error("Bad credentials for user with email {}", user.get().getEmail());
            throw new BadCredentialsException("LOGIN.BAD_CREDENTIALS");
        } else {
            logger.info("{} is authenticated!", user.get().getEmail());
        }
        return authentication;
    }
}
