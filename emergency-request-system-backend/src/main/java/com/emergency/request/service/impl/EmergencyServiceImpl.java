package com.emergency.request.service.impl;

import com.emergency.request.exception.RequestNotFoundException;
import com.emergency.request.model.EmergencyRequest;
import com.emergency.request.model.RequestStatus;
import com.emergency.request.repository.EmergencyRequestRepository;
import com.emergency.request.service.EmergencyService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;

@Service
@RequiredArgsConstructor
public class EmergencyServiceImpl implements EmergencyService {

    private final EmergencyRequestRepository emergencyRequestRepository;

    @Override
    public EmergencyRequest createRequest(EmergencyRequest emergencyRequest) {
        emergencyRequest.setPriorityScore(
                computePriorityScore(emergencyRequest.getEmergencyType().getUrgencyScore(),
                                        emergencyRequest.getUrgencyLevel(),
                                        emergencyRequest.getNumberOfPeopleAffected()
                ));
        emergencyRequest.setStatus(RequestStatus.PENDING);
        EmergencyRequest savedRequest =  emergencyRequestRepository.save(emergencyRequest);
        return savedRequest;
    }

    @Override
    public Page<EmergencyRequest> getAllRequests(Pageable pageable) {
        return emergencyRequestRepository.findAll(pageable);
    }

    @Override
    public EmergencyRequest getRequestById(Long id) {
        return emergencyRequestRepository.findById(id)
                .orElseThrow(() -> new RequestNotFoundException("Request not found"));
    }

    private int computePriorityScore(
            int emergencyTypeScore,
            int urgencyLevel,
            int numberOfPeopleAffected) {

        return (emergencyTypeScore * 50)
                + (urgencyLevel * 30)
                + (numberOfPeopleAffected * 20);
    }
}
