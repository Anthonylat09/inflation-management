package com.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
@Entity
@Table(name = "Transaction")
public class Transaction {
    @Id
    @Column(name = "id_transaction", nullable = false)
    private Long idTransaction;
    @Column(name = "nom_transaction")
    String nomTransaction;
    @Column(name = "est_revenu?")
    Boolean estRevenu;
    @Column(name = "montant")
    Double montantTransaction;
    @ManyToOne
    @JoinColumn(name = "categorie")
    Category categorieTransaction;
    @Column(name = "date")
    Date dateTransaction;

}
