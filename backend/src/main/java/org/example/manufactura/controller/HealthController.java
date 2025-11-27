package org.example.manufactura.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/health")
public class HealthController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/database")
    public Map<String, String> checkDatabase() {
        try {
            String result = jdbcTemplate.queryForObject("SELECT version()", String.class);
            return Map.of(
                    "status", "OK",
                    "database", "PostgreSQL",
                    "version", result,
                    "message", "PostgreSQL connection successful"
            );
        } catch (Exception e) {
            return Map.of("status", "ERROR", "message", e.getMessage());
        }
    }

    @GetMapping("/tables")
    public Map<String, Object> checkTables() {
        try {
            Integer tableCount = jdbcTemplate.queryForObject(
                    "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public'",
                    Integer.class
            );

            Integer requestCount = jdbcTemplate.queryForObject(
                    "SELECT COUNT(*) FROM consultation_requests",
                    Integer.class
            );

            return Map.of(
                    "status", "OK",
                    "tableCount", tableCount,
                    "consultationRequestsCount", requestCount
            );
        } catch (Exception e) {
            return Map.of("status", "ERROR", "message", e.getMessage());
        }
    }
}
