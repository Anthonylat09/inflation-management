package com.controllers;

import com.annotations.IsAuthenticated;
import com.entities.Category;
import com.services.CategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("categories")
public class CategoryController {
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @IsAuthenticated
    @GetMapping("all")
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categories = categoryService.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    @IsAuthenticated
    @GetMapping("{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable long id) {
        Category category = categoryService.getCategoryById(id);
        if (category != null) {
            return ResponseEntity.ok(category);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @IsAuthenticated
    @GetMapping("user/{idUser}")
    public ResponseEntity<List<Category>> getCategoriesByUserId(@PathVariable long idUser) {
        List<Category> allCategoriesByUsers = categoryService.getAllCategoriesByUsers(idUser);
        if (allCategoriesByUsers != null) {
            return ResponseEntity.ok(allCategoriesByUsers);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @IsAuthenticated
    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody Category category) {
        Category createdCategory = categoryService.createCategory(category);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCategory);
    }

    @IsAuthenticated
    @PutMapping("{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable long id, @RequestBody Category category) {
        Category updatedCategory = categoryService.updateCategory(id, category);
        if (updatedCategory != null) {
            return ResponseEntity.ok(updatedCategory);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @IsAuthenticated
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable long id) {
        boolean deleted = categoryService.deleteCategory(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

