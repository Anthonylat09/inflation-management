package com.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_categorie", nullable = false)
    private Long id;
    @Column(name = "nom_categorie")
    String nomCategorie;
    @Column(name = "budget_categorie")
    Double budgetCategorie;

}
