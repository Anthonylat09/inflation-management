package com.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Comment;

import java.util.Date;

@Setter
@Getter
@Entity
@Table(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Comment("Id de la transaction")
    @Column(name = "id_transaction", nullable = false)
    private Long idTransaction;

    @NotEmpty(message = "Nom requis")
    @NotNull(message = "Nom requis")
    @NotBlank(message = "Nom requis")
    @Comment("Nom de la transaction")
    @Column(name = "nom_transaction", nullable = false)
    String nomTransaction;

    @NotNull(message = "Type de transaction requis")
    @Comment("Recette (1) ou depense (0)")
    @Column(name = "est_revenu", nullable = false)
    Boolean estRevenu;

    @NotNull(message = "Montant de transaction requis")
    @Comment("Montant de la transaction")
    @Column(name = "montant", nullable = false)
    Double montantTransaction;


    @ManyToOne
    @NotNull(message = "Categorie de transaction requise")
    @Comment("Categorie de la transaction")
    @JoinColumn(name = "id_categorie", nullable = false)
    Category categorieTransaction;

    @Temporal(TemporalType.DATE)
    @NotNull(message = "Date de la transaction requise")
    @Comment("Date de la transaction")
    @Column(name = "date_transaction", nullable = false)
    Date dateTransaction;

    @ManyToOne
    @JoinColumn(name = "id_user", updatable = false)
    User userTransaction;
}
