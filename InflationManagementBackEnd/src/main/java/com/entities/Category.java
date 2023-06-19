package com.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Comment;

@Getter
@Setter
@Entity
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Comment("Id de la catégorie")
    @Column(name = "id_categorie", nullable = false)
    private Long id;

    @NotEmpty(message = "Nom requis")
    @NotNull(message = "Nom requis")
    @NotBlank(message = "Nom requis")
    @Comment("Nom de la categorie")
    @Column(name = "nom_categorie", nullable = false)
    String nomCategorie;

    @Comment("Budget de la categorie")
    @Column(name = "budget_categorie")
    Double budgetCategorie;

    @Column(name = "couleur_categorie")
    String couleurCategorie;

    @ManyToOne
    @JoinColumn(name = "section_id")
    Section sectionCategory;


    public Category(){}
    public Category(Long id) {
        this.id = id;
    }
}
