package org.example.manufactura.service;

import org.example.manufactura.entity.ConsultationRequest;

public interface EmailService {
    void sendConsultationNotification(ConsultationRequest request);
}