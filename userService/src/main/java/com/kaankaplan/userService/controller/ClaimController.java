package com.kaankaplan.userService.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user/claims/")
@RequiredArgsConstructor
public class ClaimController {

    @PreAuthorize("hasRole('CUSTOMER')")
    @GetMapping("getall")
    public String getAll() {
        return "Deneme deneme";
    }

    @GetMapping("get")
    public String get() {
        return "Get request deneme";
    }
}
