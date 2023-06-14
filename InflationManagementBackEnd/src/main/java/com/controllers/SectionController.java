package com.controllers;

import com.annotations.IsAuthenticated;
import com.entities.Section;
import com.services.SectionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("sections")
public class SectionController {
    private final SectionService sectionService;

    public SectionController(SectionService sectionService) {
        this.sectionService = sectionService;
    }

    @IsAuthenticated
    @GetMapping("all")
    public ResponseEntity<List<Section>> getAllSections() {
        List<Section> sections = sectionService.getAllSections();
        return ResponseEntity.ok(sections);
    }

    @IsAuthenticated
    @PostMapping
    public ResponseEntity<Section> createSection(@RequestBody Section section) {
        Section createdSection = sectionService.createSection(section);
        return ResponseEntity.ok(createdSection);
    }

    @IsAuthenticated
    @GetMapping("{id}")
    public ResponseEntity<Section> getSectionById(@PathVariable long id) {
        Section section = sectionService.getSectionById(id);
        if (section != null) {
            return ResponseEntity.ok(section);
        }
        return ResponseEntity.notFound().build();
    }

    @IsAuthenticated
    @PutMapping("{id}")
    public ResponseEntity<Section> updateSection(@PathVariable long id, @RequestBody Section updatedSection) {
        Section updated = sectionService.updateSection(id, updatedSection);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        }
        return ResponseEntity.notFound().build();
    }

    @IsAuthenticated
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteSection(@PathVariable long id) {
        boolean deleted = sectionService.deleteSection(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
