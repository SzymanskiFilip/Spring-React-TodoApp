package com.example.todoapp.repositories;

import com.example.todoapp.entities.Todo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TodoRepository extends CrudRepository<Todo, Long> {
    List<Todo> findAll();

    @Query(value = "UPDATE todos SET status = ?1 WHERE id = ?2", nativeQuery = true)
    Todo updateTodo(Boolean status, Integer id);
}
