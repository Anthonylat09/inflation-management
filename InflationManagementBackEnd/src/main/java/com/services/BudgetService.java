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
import java.util.Date;
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

    public List<SectionDto> getAllSectionsWithCategories(Long idUser, Date startDate, Date endDate) {
        var sectionList = sectionRepository.findAll();
        List<SectionDto> sectionDtoList = new ArrayList<>();
        sectionList.forEach(section -> {
            var categList = categoryRepository.findAllBySectionCategoryAndUserCategory_IdUserOrderByNomCategorie(section,idUser);
            List<CategoryDto> categoryDtoList = new ArrayList<>();
            categList.forEach(category -> {
                double sumTransactions = 0.;
                var transactionList = transactionRepository.findTransactionByUserTransaction_IdUserAndCategorieTransactionAndDateTransactionBetween(
                        idUser,
                        category,
                        startDate,
                        endDate);

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

    public PieChartDto getData(Long idUser, Date startDate, Date endDate){
        var sections = getAllSectionsWithCategories(idUser,startDate,endDate);
        List<Double> series = new ArrayList<>();
        List<String> colors = new ArrayList<>();
        List<String> names = new ArrayList<>();
        for (SectionDto sectionDto:
             sections) {
            series.add(sectionDto.getBudgetTotal());
            colors.add(sectionDto.getCouleurSection());
            names.add(sectionDto.getNomSection());
        }
        return new PieChartDto(series,colors,names);
    }

}
