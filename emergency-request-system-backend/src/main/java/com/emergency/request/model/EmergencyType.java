package com.emergency.request.model;

public enum EmergencyType {
    MEDICAL(10), // life-threatening situations
    RESCUE(9),   // trapped or missing persons
    SHELTER(8),  // exposure to harsh weather, unsafe structures
    FOOD(7),     // critical for survival
    SECURITY(6), // safety concerns, conflict risk, crowd control
    OTHER(3);    // unspecified or low urgency

    private final int urgencyScore;

    EmergencyType(int urgencyScore) {
        this.urgencyScore = urgencyScore;
    }
    public int getUrgencyScore() {
        return urgencyScore;
    }
}
