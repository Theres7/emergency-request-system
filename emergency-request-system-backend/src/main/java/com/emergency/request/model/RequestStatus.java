package com.emergency.request.model;

public enum RequestStatus {
    PENDING, // request created but not yet handled
    ASSIGNED, // responder/team assigned
    IN_PROGRESS, // currently being resolved
    ON_HOLD, // temporarily paused
    RESOLVED, // issue successfully resolved
    CANCELLED, // request cancelled by user/admin
    REJECTED  // invalid or duplicate request
}
