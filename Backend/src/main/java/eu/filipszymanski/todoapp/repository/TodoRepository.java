package eu.filipszymanski.todoapp.repository;

import eu.filipszymanski.todoapp.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {

}
