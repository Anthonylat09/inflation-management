package com.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Section")
public class Section {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_section", nullable = false)
    private Long id;
    @Column(name = "nom_section")
    String nomSection;
    @Column(name = "couleur_section")
    String couleurSection;
}
