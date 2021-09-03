package eu.filipszymanski.todoapp.controller;

import eu.filipszymanski.todoapp.entity.Todo;
import eu.filipszymanski.todoapp.repository.TodoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/todos")
public class TodoController {

    private TodoRepository todoRepository;

    public TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("")
    public List<Todo> index(){
        return todoRepository.findAll();
    }

}
