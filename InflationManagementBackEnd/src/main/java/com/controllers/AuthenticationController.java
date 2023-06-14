package com.controllers;

import com.annotations.IsAuthenticated;
import com.entities.User;
import com.securityservices.AuthenticationService;
import com.utils.dto.AuthenticationRequestDto;
import com.utils.dto.AuthenticationResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("authentication")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping(value = "/login")
    public ResponseEntity<AuthenticationResponseDto> login(@RequestBody AuthenticationRequestDto authenticationRequestDto) {
        return ResponseEntity.ok(this.authenticationService.authenticate(authenticationRequestDto));
    }

    @IsAuthenticated
    @GetMapping("current-logged-in")
    public ResponseEntity<User> getCurrentLoggedInUser(Authentication authentication){
        var currentLogger = this.authenticationService.getCurrentLoggedUser(authentication);
        return currentLogger.map(ResponseEntity::ok).orElse(null);
    }

}
