package com.sivalabs.todo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by Siva on 1/26/2017.
 */
@Entity
public class Todo {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String text;
    private  boolean done;

    public Todo() {
    }

    public Todo(Integer id, String text, boolean done) {
        this.id = id;
        this.text = text;
        this.done = done;
    }

    @Override
    public String toString() {
        return "Todo{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", done=" + done +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }
}
