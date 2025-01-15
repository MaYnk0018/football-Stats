package com.example.matchstats.data;

import java.util.HashMap;
import java.util.Map;

public class MockData {
    public static final Map<String, Map<String, Object>> mockMatches = new HashMap<>();
    
    static {
        // Match 1
        Map<String, Object> match1Data = new HashMap<>();
        match1Data.put("matchId", "1");
        match1Data.put("date", "2025-01-15");

        // Team Stats structure
        Map<String, String> teamAStats = new HashMap<>();
        teamAStats.put("goals", "2");
        teamAStats.put("possession", "55");
        teamAStats.put("passes", "435");
        teamAStats.put("shots", "15");
        teamAStats.put("shotsOnTarget", "8");
        teamAStats.put("corners", "7");

        Map<String, String> teamBStats = new HashMap<>();
        teamBStats.put("goals", "1");
        teamBStats.put("possession", "45");
        teamBStats.put("passes", "398");
        teamBStats.put("shots", "12");
        teamBStats.put("shotsOnTarget", "5");
        teamBStats.put("corners", "5");

        // Combine team stats
        Map<String, Map<String, String>> stats = new HashMap<>();
        stats.put("teamA", teamAStats);
        stats.put("teamB", teamBStats);
        
        match1Data.put("stats", stats);

        // Match 2
        Map<String, Object> match2Data = new HashMap<>();
        match2Data.put("matchId", "2");
        match2Data.put("date", "2025-01-14");

        // Team Stats for match 2
        Map<String, String> teamAStats2 = new HashMap<>();
        teamAStats2.put("goals", "3");
        teamAStats2.put("possession", "52");
        teamAStats2.put("passes", "456");
        teamAStats2.put("shots", "18");
        teamAStats2.put("shotsOnTarget", "10");
        teamAStats2.put("corners", "8");

        Map<String, String> teamBStats2 = new HashMap<>();
        teamBStats2.put("goals", "2");
        teamBStats2.put("possession", "48");
        teamBStats2.put("passes", "412");
        teamBStats2.put("shots", "14");
        teamBStats2.put("shotsOnTarget", "6");
        teamBStats2.put("corners", "6");

        // Combine team stats for match 2
        Map<String, Map<String, String>> stats2 = new HashMap<>();
        stats2.put("teamA", teamAStats2);
        stats2.put("teamB", teamBStats2);
        
        match2Data.put("stats", stats2);

        // Add matches to mockMatches
        mockMatches.put("1", match1Data);
        mockMatches.put("2", match2Data);
    }
}