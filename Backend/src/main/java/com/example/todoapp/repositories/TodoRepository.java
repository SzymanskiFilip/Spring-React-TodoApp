package com.example.todoapp.repositories;

import com.example.todoapp.entities.Todo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TodoRepository extends CrudRepository<Todo, Long> {
    List<Todo> findAll();
}
