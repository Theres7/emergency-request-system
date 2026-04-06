package com.emergency.request.controller;

import com.emergency.request.model.EmergencyRequest;
import com.emergency.request.service.EmergencyService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/emergency")
@RequiredArgsConstructor
@Slf4j
public class EmergencyRequestController {

    private final EmergencyService emergencyService;

    // Create a new emergency request.
    @PostMapping
    public ResponseEntity<EmergencyRequest> createRequest(@RequestBody @Valid EmergencyRequest request){
        EmergencyRequest createdRequest = emergencyService.createRequest(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(createdRequest);
    }

    // Retrieve all emergency requests sorted by priority score.
    @GetMapping
    public ResponseEntity<Page<EmergencyRequest>> getAllRequestsWithPriorityScoreDesc(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "desc") String sortDirection,
            @RequestParam(defaultValue = "priorityScore") String sortBy
    ){
        Sort sort = sortDirection.equalsIgnoreCase("desc") ?
                Sort.by(sortBy).descending() :
                Sort.by(sortBy).ascending();

        Pageable pageable = PageRequest.of(page, size, sort);
        Page<EmergencyRequest> requests = emergencyService.getAllRequests(pageable);

        return ResponseEntity.ok(requests);
    }

    //  Retrieve a specific emergency request by Id.
    @GetMapping("/{id}")
    public ResponseEntity<EmergencyRequest> getRequestById(@PathVariable Long id){
        EmergencyRequest request = emergencyService.getRequestById(id);
        return ResponseEntity.ok(request);
    }

}
