package com.emergency.request.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "emergency_request")
public class EmergencyRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String location;

    private String contactNumber;

    private String description;

    @Enumerated(EnumType.STRING)
    private EmergencyType emergencyType;

    private int numberOfPeopleAffected;

    private int urgencyLevel; //select a value or click a button by user [from a range of value] to set urgency level

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private int priorityScore;

    private RequestStatus status;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}
