package com.services;

import com.entities.Section;
import com.repositories.SectionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SectionService {
    private final SectionRepository sectionRepository;

    public SectionService(SectionRepository sectionRepository) {
        this.sectionRepository = sectionRepository;
    }

    public Section createSection(Section section) {
        return sectionRepository.save(section);
    }

    public Section getSectionById(Long id) {
        return sectionRepository.findById(id).orElse(null);
    }

    public List<Section> getAllSections() {
        return sectionRepository.findAll();
    }

    public Section updateSection(Long id, Section updatedSection) {
        Section section = sectionRepository.findById(id).orElse(null);
        if (section != null) {
            section.setNomSection(updatedSection.getNomSection());
            section.setCouleurSection(updatedSection.getCouleurSection());
            return sectionRepository.save(section);
        }
        return null;
    }

    public boolean deleteSection(Long id) {
        if (sectionRepository.existsById(id)) {
            sectionRepository.deleteById(id);
            return true;
        }
        return false;
    }
    
}
