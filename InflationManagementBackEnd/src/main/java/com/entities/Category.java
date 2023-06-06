package com.entities;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Category {
    String nomCategorie;
    Double budgetCategorie;

    public Category(String nomCategorie, Double budgetCategorie) {
        this.nomCategorie = nomCategorie;
        this.budgetCategorie = budgetCategorie;
    }

    @Override
    public String toString() {
        return "Category{" +
                "nomCategorie='" + nomCategorie + '\'' +
                ", budgetCategorie=" + budgetCategorie +
                '}';
    }
}
