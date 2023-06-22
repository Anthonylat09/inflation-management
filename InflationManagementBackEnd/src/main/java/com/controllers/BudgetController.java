package com.controllers;

import com.annotations.IsAuthenticated;
import com.services.BudgetService;
import com.services.SectionService;
import com.utils.dto.PieChartDto;
import com.utils.dto.SectionDto;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("budget")
public class BudgetController {

    private final BudgetService budgetService;

    public BudgetController(BudgetService budgetService) {
        this.budgetService = budgetService;
    }

    @IsAuthenticated
    @GetMapping("sections/{idUser}")
    public ResponseEntity<List<SectionDto>> getAllSectionsWithCategories(@PathVariable("idUser") Long idUser,
                                                                         @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date startDate,
                                                                         @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date endDate) {
        return ResponseEntity.ok(budgetService.getAllSectionsWithCategories(idUser,startDate,endDate));
    }

    @IsAuthenticated
    @GetMapping("pieChartData/{idUser}")
    public ResponseEntity<PieChartDto> getData(@PathVariable("idUser") Long idUser,
                                               @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)Date startDate,
                                               @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date endDate){
        return ResponseEntity.ok(budgetService.getData(idUser,startDate,endDate));
    }
}
