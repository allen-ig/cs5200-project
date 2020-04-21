package edu.cs5200.controller;

import edu.cs5200.models.Manager;
import edu.cs5200.repositories.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class ManagerController {
    @Autowired
    ManagerRepository managerRepository;

    @PostMapping("/api/manager/create")
    public void createManager(@RequestBody Manager manager){
        managerRepository.save(manager);
    }

    @DeleteMapping("/api/manager/{id}/delete")
    public void deleteManager(@PathVariable int id){
        managerRepository.deleteById(id);
    }

}
