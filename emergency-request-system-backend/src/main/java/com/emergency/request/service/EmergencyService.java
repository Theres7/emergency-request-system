package com.emergency.request.service;

import com.emergency.request.model.EmergencyRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface EmergencyService  {
    EmergencyRequest createRequest(EmergencyRequest emergencyRequest);
    Page<EmergencyRequest> getAllRequests(Pageable pageable);
    EmergencyRequest getRequestById(Long id);
}
