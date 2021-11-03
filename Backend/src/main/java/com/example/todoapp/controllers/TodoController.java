package com.example.todoapp.controllers;

import com.example.todoapp.repositories.TodoRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class TodoController {
    private final TodoRepository repository;
    public TodoController(TodoRepository repository){
        this.repository = repository;
    }

}
