package com.entities;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
public class Transaction {
    String nomTransaction;
    Boolean estRevenu;
    Double montantTransaction;
    Category categorieTransaction;
    Date dateTransaction;

    public Transaction(String nomTransaction, Boolean estRevenu, Double montantTransaction, Category categorieTransaction, Date dateTransaction) {
        this.nomTransaction = nomTransaction;
        this.estRevenu = estRevenu;
        this.montantTransaction = montantTransaction;
        this.categorieTransaction = categorieTransaction;
        this.dateTransaction = dateTransaction;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "nomTransaction='" + nomTransaction + '\'' +
                ", estRevenu=" + estRevenu +
                ", montantTransaction=" + montantTransaction +
                ", categorieTransaction=" + categorieTransaction +
                ", dateTransaction=" + dateTransaction +
                '}';
    }
}
