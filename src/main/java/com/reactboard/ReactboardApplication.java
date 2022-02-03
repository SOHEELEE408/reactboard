package com.reactboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class ReactboardApplication {

    public static void main(String[] args) {
        SpringApplication.run(ReactboardApplication.class, args);
    }

}
