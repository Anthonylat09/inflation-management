package com.utils.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record AuthenticationRequestDto(
        @NotNull String email,
        @NotNull @Size(max = 255, min = 4) String password) {
}
