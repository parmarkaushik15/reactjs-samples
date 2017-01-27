package com.sivalabs.todo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Siva on 1/26/2017.
 */
@RestController
public class PersonController {

    @GetMapping("/echo")
    public String echo(){
        return "Hello...";
    }
}
