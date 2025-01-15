package com.example.matchstats.model;

import lombok.Data;
import java.util.Map;

@Data
public class MatchStats {
    private Map<String, Object> data;  // Using Object to accommodate varying data structure
}