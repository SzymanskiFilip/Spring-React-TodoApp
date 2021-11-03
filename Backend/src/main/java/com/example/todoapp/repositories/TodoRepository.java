package com.example.todoapp.repositories;

import com.example.todoapp.entities.Todo;
import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<Todo, Long> {

}
