package org.example.manufactura.service;

import org.example.manufactura.dto.request.ConsultationRequestDto;
import org.example.manufactura.dto.response.ConsultationResponseDto;
import org.example.manufactura.entity.RequestStatus;

import java.util.List;

public interface ConsultationService {

    ConsultationResponseDto createConsultationRequest(ConsultationRequestDto requestDto);

    List<ConsultationResponseDto> getAllConsultationRequests();

    ConsultationResponseDto getConsultationRequestById(Long id);

    ConsultationResponseDto updateRequestStatus(Long id, RequestStatus status);

    void deleteConsultationRequest(Long id);

    List<ConsultationResponseDto> getRequestsByStatus(RequestStatus status);

    long getStatistics();
}