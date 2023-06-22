package com.repositories;

import com.entities.Category;
import com.entities.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    List<Category> findAllBySectionCategoryAndUserCategory_IdUserOrderByNomCategorie(Section section, Long idUser);
    List<Category> findAllByUserCategory_IdUserOrderByNomCategorie(Long idUser);
}
