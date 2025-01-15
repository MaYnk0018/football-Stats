package com.example.matchstats.controller;

import com.example.matchstats.data.MockData;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class MatchStatsController {

    @GetMapping("/getMatchStats")
    public ResponseEntity<?> getMatchStats(@RequestParam String matchId) {
        if (matchId == null || matchId.isEmpty()) {
            return ResponseEntity.badRequest()
                .body(Map.of("error", "Match ID is required"));
        }

        Map<String, Object> match = MockData.mockMatches.get(matchId);
        
        if (match == null) {
            return ResponseEntity.notFound()
                .build();
        }

        return ResponseEntity.ok(match);
    }
}