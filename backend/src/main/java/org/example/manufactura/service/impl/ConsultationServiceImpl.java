package org.example.manufactura.service.impl;

import org.example.manufactura.dto.request.ConsultationRequestDto;
import org.example.manufactura.dto.response.ConsultationResponseDto;
import org.example.manufactura.entity.ConsultationRequest;
import org.example.manufactura.entity.RequestStatus;
import org.example.manufactura.repository.ConsultationRepository;
import org.example.manufactura.service.ConsultationService;
import org.example.manufactura.service.EmailService;
import org.example.manufactura.exception.ResourceNotFoundException;
import org.example.manufactura.service.mapper.ConsultationMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ConsultationServiceImpl implements ConsultationService {

    @Autowired
    private ConsultationRepository consultationRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private ConsultationMapper consultationMapper;

    @Override
    public ConsultationResponseDto createConsultationRequest(ConsultationRequestDto requestDto) {
        ConsultationRequest consultationRequest = consultationMapper.toEntity(requestDto);
        ConsultationRequest savedRequest = consultationRepository.save(consultationRequest);

        emailService.sendConsultationNotification(savedRequest);

        return consultationMapper.toDto(savedRequest);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ConsultationResponseDto> getAllConsultationRequests() {
        return consultationRepository.findAll()
                .stream()
                .map(consultationMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public ConsultationResponseDto getConsultationRequestById(Long id) {
        ConsultationRequest request = consultationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Consultation request not found with id: " + id));
        return consultationMapper.toDto(request);
    }

    @Override
    public ConsultationResponseDto updateRequestStatus(Long id, RequestStatus status) {
        ConsultationRequest request = consultationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Consultation request not found with id: " + id));

        request.setStatus(status);
        ConsultationRequest updatedRequest = consultationRepository.save(request);

        return consultationMapper.toDto(updatedRequest);
    }

    @Override
    public void deleteConsultationRequest(Long id) {
        if (!consultationRepository.existsById(id)) {
            throw new ResourceNotFoundException("Consultation request not found with id: " + id);
        }
        consultationRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ConsultationResponseDto> getRequestsByStatus(RequestStatus status) {
        return consultationRepository.findByStatus(status)
                .stream()
                .map(consultationMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public long getStatistics() {
        return consultationRepository.countByStatus(RequestStatus.NEW);
    }
}