package com.services;

import com.entities.Transaction;
import com.repositories.TransactionRepository;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {
    private final TransactionRepository transactionRepository;

    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public Transaction saveTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    public Transaction findTransactionById(Long id) {
        return transactionRepository.findById(id).orElse(null);
    }
}
