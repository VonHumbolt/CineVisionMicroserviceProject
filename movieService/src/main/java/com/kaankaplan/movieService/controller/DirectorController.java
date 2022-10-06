package com.kaankaplan.movieService.controller;

import com.kaankaplan.movieService.business.abstracts.DirectorService;
import com.kaankaplan.movieService.entity.Director;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movie/directors/")
@RequiredArgsConstructor
//@CrossOrigin
public class DirectorController {

    private final DirectorService directorService;


    @GetMapping("getall")
    public List<Director> getall() {
       return directorService.getall();
    }

    @PostMapping("add")
    public Director add(@RequestBody Director director) {
        return directorService.add(director);
    }
}
