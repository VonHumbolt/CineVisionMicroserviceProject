package com.kaankaplan.movieService.controller;

import com.kaankaplan.movieService.business.abstracts.DirectorService;
import com.kaankaplan.movieService.entity.Director;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/directors/")
@RequiredArgsConstructor
@CrossOrigin
public class DirectorController {

    private final DirectorService directorService;


    @GetMapping("getall")
    public List<Director> getall() {
       return directorService.getall();
    }
}
