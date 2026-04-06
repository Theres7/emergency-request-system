package com.emergency.request.model;

public enum EmergencyType {
    MEDICAL(10), // life-threatening situations
     RESCUE(9), // trapped or missing persons
     SHELTER(7), // protection from environment
     WATER(6), // critical for survival
     FOOD(4), // essential supply but not immediate danger
     OTHER(3); // unspecified or low urgency

    private final int urgencyScore;

    EmergencyType(int urgencyScore) {
        this.urgencyScore = urgencyScore;
    }
    public int getUrgencyScore() {
        return urgencyScore;
    }
}
