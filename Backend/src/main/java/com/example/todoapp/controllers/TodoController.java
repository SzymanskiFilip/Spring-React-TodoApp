package com.example.todoapp.controllers;

import com.example.todoapp.entities.Todo;
import com.example.todoapp.repositories.TodoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class TodoController {
    private final TodoRepository repository;
    public TodoController(TodoRepository repository){
        this.repository = repository;
    }


    @GetMapping("/todos")
    List<Todo> allTodos(){
        return repository.findAll();
    }

    @PutMapping("/todo")
    Todo updateTodo(@RequestBody Todo todo){
        return repository.save(todo);
    }

}
