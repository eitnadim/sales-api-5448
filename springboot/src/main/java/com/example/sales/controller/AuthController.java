package com.example.sales.controller;

import com.example.sales.dto.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController @RequestMapping("/api/auth") @Slf4j
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<Map<String,String>>> login(@RequestBody LoginRequest req) {
        log.info("Login attempt: {}", req.getEmail());
        // TODO: implement authentication logic
        return ResponseEntity.ok(ApiResponse.success(Map.of("token","REPLACE_WITH_REAL_TOKEN")));
    }
}
