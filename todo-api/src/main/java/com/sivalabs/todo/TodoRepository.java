package com.sivalabs.todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by Siva on 1/26/2017.
 */
@RepositoryRestResource(path = "/todos", collectionResourceRel = "todos")
public interface TodoRepository extends JpaRepository<Todo, Integer> {
}
