package com.example.demo.controller;

import com.example.demo.model.Subject;
import com.example.demo.repository.SubjectRepository;
import com.example.demo.resource.SubjectRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SubjectController {
    private final SubjectRepository subjectRepository;

    public SubjectController(SubjectRepository subjectRepository) {
        this.subjectRepository = subjectRepository;
    }

    @GetMapping("/subject")
    public ResponseEntity<List<Subject>> getAllSubjects(){
        return ResponseEntity.ok(this.subjectRepository.findAll());
    }
    @PostMapping("/post")
    public ResponseEntity<Subject> createSubject(@RequestBody SubjectRequest subjectRequest){
        Subject subject = new Subject();
        subject.setName(subjectRequest.getName());
        subject.setDescription(subjectRequest.getDescription());
        subject.setNote(subjectRequest.getNote());
        subject.setImageUrl(subjectRequest.getImageUrl());
        return ResponseEntity.status(201).body(this.subjectRepository.save(subject));
    }
    @GetMapping("/subject/{id}")
    public ResponseEntity getSubjectById(@PathVariable String id){
        Optional<Subject> subject= this.subjectRepository.findById(id);
        if(subject.isPresent()){
           return ResponseEntity.ok(subject.get());
        } else {
            return ResponseEntity.ok("The Subject with Id: " + id + " was not found");
        }
    }
    @DeleteMapping("/subject/delete/{id}")
    public ResponseEntity deleteSubjectById(@PathVariable String id){
        Optional<Subject> subject= this.subjectRepository.findById(id);
        if(subject.isPresent()){
            this.subjectRepository.deleteById(id);
            return ResponseEntity.ok( "The Subject was deleted");
        } else {
            return ResponseEntity.ok("The Subject with Id: " + id + " was not found");
        }
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateSubjectById(@PathVariable String id, @RequestBody SubjectRequest subjectRequest) {
        Optional<Subject> optionalSubject = subjectRepository.findById(id);
        if (optionalSubject.isPresent()) {
            Subject subject = optionalSubject.get();

            if (subjectRequest.getName() != null) {
                subject.setName(subjectRequest.getName());
            }
            if (subjectRequest.getDescription() != null) {
                subject.setDescription(subjectRequest.getDescription());
            }
            if (subjectRequest.getNote() != null) {
                subject.setNote(subjectRequest.getNote());
            }
            if (subjectRequest.getImageUrl() != null) {
                subject.setImageUrl(subjectRequest.getImageUrl());
            }

            Subject updatedSubject = subjectRepository.save(subject);
            return ResponseEntity.ok(updatedSubject);
        } else {
            return ResponseEntity.ok("The Subject with ID: " + id + " was not found");
        }
    }




}

