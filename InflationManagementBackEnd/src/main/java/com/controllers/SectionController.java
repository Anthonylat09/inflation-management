package com.controllers;

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

    @GetMapping("all")
    public ResponseEntity<List<Section>> getAllSections() {
        List<Section> sections = sectionService.getAllSections();
        return ResponseEntity.ok(sections);
    }

    @PostMapping
    public ResponseEntity<Section> createSection(@RequestBody Section section) {
        Section createdSection = sectionService.createSection(section);
        return ResponseEntity.ok(createdSection);
    }

    @GetMapping("{id}")
    public ResponseEntity<Section> getSectionById(@PathVariable long id) {
        Section section = sectionService.getSectionById(id);
        if (section != null) {
            return ResponseEntity.ok(section);
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("{id}")
    public ResponseEntity<Section> updateSection(@PathVariable long id, @RequestBody Section updatedSection) {
        Section updated = sectionService.updateSection(id, updatedSection);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteSection(@PathVariable long id) {
        boolean deleted = sectionService.deleteSection(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
