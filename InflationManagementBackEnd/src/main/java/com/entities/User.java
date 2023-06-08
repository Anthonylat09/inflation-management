package com.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.utils.enums.RoleEnum;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.Comment;

import java.util.ArrayList;

@Getter
@Setter
@Entity
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Comment("Id de l'utilisateur")
    @Column(name = "id_user", nullable = false)
    private Long idUser;

    @OneToMany
    ArrayList<Transaction> userTransactions;

    @NotEmpty(message = "Nom requis")
    @NotNull(message = "Nom requis")
    @NotBlank(message = "Nom requis")
    @Comment("Nom de l'utilisateur")
    @Column(name = "nom", nullable = false)
    String nom;

    @NotEmpty(message = "Prénom requis")
    @NotNull(message = "Prénom requis")
    @NotBlank(message = "Prénom requis")
    @Comment("Prénom de l'utilisateur")
    @Column(name = "prenom", nullable = false)
    String prenom;

    @NotEmpty(message = "Email requis")
    @NotNull(message = "Email requis")
    @NotBlank(message = "Email requis")
    @Comment("Email de l'utilisateur")
    @Column(name = "email", nullable = false, unique = true)
    String email;

    @JsonIgnore
    @NotEmpty(message = "Mot de passe requis")
    @NotNull(message = "Mot de passe requis")
    @NotBlank(message = "Mot de passe requis")
    @Comment("Mot de passe de l'utilisateur")
    @Column(name = "password", nullable = false)
    String password;

    @Comment("Budget de l'utilisateur")
    @Column(name = "budget")
    Double budget;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false)
    @ColumnDefault(value = "USER")
    private RoleEnum role;

}