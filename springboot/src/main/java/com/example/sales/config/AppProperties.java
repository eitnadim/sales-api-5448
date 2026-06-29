package com.example.sales.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component @ConfigurationProperties(prefix="app") @Data
public class AppProperties {
    private String jwtSecret = "change-me-in-production";
    private long   jwtExpiry = 86400000;
    private String mailFrom  = "noreply@example.com";
}
