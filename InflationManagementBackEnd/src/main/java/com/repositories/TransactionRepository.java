package com.repositories;

import com.entities.Transaction;
import java.util.Date;
import java.util.List;

import com.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findTransactionsByUser_IdUserAndDateTransactionBetween(Long idUser, Date startDate, Date endDate);
}
