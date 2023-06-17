package com.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.Hibernate;

import java.util.Objects;

@Getter
@Setter
@Entity
@Table(name = "section")
public class Section {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_section", nullable = false)
    private Long id;
    @Column(name = "nom_section")
    String nomSection;
    @Column(name = "couleur_section")
    String couleurSection;


    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || Hibernate.getClass(this) != Hibernate.getClass(obj)) return false;
        Section section = (Section) obj;
        return Objects.equals(getId(), section.getId());
    }
}
