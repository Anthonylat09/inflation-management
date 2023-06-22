package com.repositories;

import com.entities.Category;
import com.entities.Transaction;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findTransactionsByUserTransaction_IdUserAndDateTransactionBetween(Long idUser, Date startDate, Date endDate);

    List<Transaction> findAllByCategorieTransaction(Category category);

    List<Transaction> findTransactionByUserTransaction_IdUserAndCategorieTransactionAndDateTransactionBetween(
            Long idUser,
            Category category,
            Date startDate,
            Date endDate);
}
