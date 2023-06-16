package com.utils.dto;

import com.entities.Section;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CategoryDto {
    private Long id;
    String nomCategorie;
    Double budgetCategorie;
    String couleurCategorie;
    Double budgetRestant;
}
