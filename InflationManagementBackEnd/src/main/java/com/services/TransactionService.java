package com.services;

import com.entities.Transaction;
import com.entities.User;
import com.repositories.TransactionRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class TransactionService {
    private final TransactionRepository transactionRepository;

    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public Transaction createTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    public Transaction getTransactionById(Long id) {
        return transactionRepository.findById(id).orElse(null);
    }

    public List<Transaction> getTransactionByDate(Long idUser, Date startDate, Date endDate) {
        return transactionRepository.findTransactionsByUser_IdUserAndDateTransactionBetween(idUser, startDate,endDate);
    }

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }
    public Transaction updateTransaction(Long id, Transaction updatedTransaction) {
        Transaction transaction = transactionRepository.findById(id).orElse(null);
        if (transaction != null) {
            transaction.setNomTransaction(updatedTransaction.getNomTransaction());
            transaction.setEstRevenu(updatedTransaction.getEstRevenu());
            transaction.setMontantTransaction(updatedTransaction.getMontantTransaction());
            transaction.setCategorieTransaction(updatedTransaction.getCategorieTransaction());
            transaction.setDateTransaction(updatedTransaction.getDateTransaction());
            transaction.setUserTransaction(updatedTransaction.getUserTransaction());
            return transactionRepository.save(transaction);
        }
        return null;
    }

    public boolean deleteTransaction(Long id) {
        if (transactionRepository.existsById(id)) {
            transactionRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
