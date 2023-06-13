package com.services;

import com.entities.Section;
import com.repositories.SectionRepository;

public class SectionService {
    private final SectionRepository sectionRepository;

    public SectionService(SectionRepository sectionRepository) { this.sectionRepository = sectionRepository; }

    public Section saveSection(Section section) { return sectionRepository.save(section); }

    public Section findSectionById(Long id) { return sectionRepository.findById(id).orElse(null); }
}
