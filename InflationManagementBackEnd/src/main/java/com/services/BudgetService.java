package com.services;

import com.entities.Transaction;
import com.repositories.CategoryRepository;
import com.repositories.SectionRepository;
import com.repositories.TransactionRepository;
import com.utils.dto.CategoryDto;
import com.utils.dto.PieChartDto;
import com.utils.dto.SectionDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BudgetService {
    private final SectionRepository sectionRepository;
    private final CategoryRepository categoryRepository;
    private final TransactionRepository transactionRepository;

    public BudgetService(SectionRepository sectionRepository, CategoryRepository categoryRepository, TransactionRepository transactionRepository) {
        this.sectionRepository = sectionRepository;
        this.categoryRepository = categoryRepository;
        this.transactionRepository = transactionRepository;
    }

    public List<SectionDto> getAllSectionsWithCategories() {
        var sectionList = sectionRepository.findAll();
        List<SectionDto> sectionDtoList = new ArrayList<>();
        sectionList.forEach(section -> {
            var categList = categoryRepository.findAllBySectionCategoryOrderByNomCategorie(section);
            List<CategoryDto> categoryDtoList = new ArrayList<>();
            categList.forEach(category -> {
                double sumTransactions = 0.;
                var transactionList = transactionRepository.findAllByCategorieTransaction(category);

                for (Transaction transaction :
                        transactionList) {
                    sumTransactions += transaction.getMontantTransaction();
                }

                categoryDtoList.add(new CategoryDto(
                        category.getId(),
                        category.getNomCategorie(),
                        category.getBudgetCategorie(),
                        category.getCouleurCategorie(),
                        category.getBudgetCategorie() - sumTransactions
                ));

            });
            var sumBudget = 0.;
            for (CategoryDto categoryDto :
                    categoryDtoList) {
                sumBudget += categoryDto.getBudgetCategorie();
            }
            sectionDtoList.add(
                    new SectionDto(section.getId(),
                            section.getNomSection(),
                            section.getCouleurSection(),
                            categoryDtoList,
                            sumBudget)
            );
        });
        return sectionDtoList;
    }

    public PieChartDto getData(){
        var sections = getAllSectionsWithCategories();
        List<Double> series = new ArrayList<>();
        List<String> colors = new ArrayList<>();
        List<String> names = new ArrayList<>();
        for (SectionDto sectionDto:
             sections) {
            series.add(sectionDto.getBudgetTotal());
            switch (sectionDto.getCouleurSection()) {
                case "orange" -> colors.add("#FF7300");
                case "green" -> colors.add("#24C35A");
                case "blue" -> colors.add("#2476C3");
                case "red" -> colors.add("#FF0000FF");
            }
            names.add(sectionDto.getNomSection());
        }
        return new PieChartDto(series,colors,names);
    }

}
