package com.utils.dto;

import com.entities.Category;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@AllArgsConstructor
@Data
public class SectionDto {
    private Long id;
    String nomSection;
    String couleurSection;
    List<CategoryDto> categoryList;
    double budgetTotal;
}
