package com.securityservices;

import com.entities.User;
import com.repositories.AuthenticationRepository;
import com.services.UserService;
import com.utils.dto.AuthenticationRequestDto;
import com.utils.dto.AuthenticationResponseDto;
import jakarta.validation.constraints.NotNull;
import org.springframework.security.authentication.AccountExpiredException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationService {
    private final AuthenticationRepository authenticationRepository;
    private final UserService userService;
    private final JwtProviderService jwtProviderService;

    public AuthenticationService(AuthenticationRepository authenticationRepository, UserService userService, JwtProviderService jwtProviderService) {
        this.authenticationRepository = authenticationRepository;
        this.userService = userService;
        this.jwtProviderService = jwtProviderService;
    }

    public AuthenticationResponseDto authenticate(@NotNull AuthenticationRequestDto authenticationRequestDto) throws UsernameNotFoundException, BadCredentialsException, AccountExpiredException {
        Authentication authentication;
        AuthenticationResponseDto authenticationResponsedto = new AuthenticationResponseDto();
        authentication = this.authenticationRepository.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequestDto.email()
                , authenticationRequestDto.password()));

        String token = this.jwtProviderService.generateToken(authentication);
        authenticationResponsedto.setAuthResponse(token);
        return authenticationResponsedto;
    }

    public Optional<User> getCurrentLoggedUser(Authentication authentication) {
        return Optional.ofNullable(this.userService.getUserByEmail((String) authentication.getPrincipal()));
    }

    public User registerUser(User user) {
        // Vérifier si l'utilisateur existe déjà dans la base de données
        if (userService.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException("Email déjà utilisé");
        }
        // Enregistrer l'utilisateur dans la base de données
        return userService.createUser(user);
    }
}