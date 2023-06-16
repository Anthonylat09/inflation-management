package com.controllers;

import com.annotations.IsAuthenticated;
import com.services.BudgetService;
import com.services.SectionService;
import com.utils.dto.PieChartDto;
import com.utils.dto.SectionDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("budget")
public class BudgetController {

    private final BudgetService budgetService;

    public BudgetController(BudgetService budgetService) {
        this.budgetService = budgetService;
    }

    @IsAuthenticated
    @GetMapping("sections/all")
    public ResponseEntity<List<SectionDto>> getAllSectionsWithCategories() {
        return ResponseEntity.ok(budgetService.getAllSectionsWithCategories());
    }

    @IsAuthenticated
    @GetMapping("pieChartData")
    public ResponseEntity<PieChartDto> getData(){
        return ResponseEntity.ok(budgetService.getData());
    }
}
