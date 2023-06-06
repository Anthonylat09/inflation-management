package com.entities;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {
    String nom;
    String prenom;
    Float budget;

    public User(String nom, String prenom, Float budget) {
        this.nom = nom;
        this.prenom = prenom;
        this.budget = budget;
    }

    @Override
    public String toString() {
        return "User{" +
                "nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", budget=" + budget +
                '}';
    }

}