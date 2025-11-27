package org.example.manufactura.controller;

import org.example.manufactura.dto.request.ConsultationRequestDto;
import org.example.manufactura.dto.response.ApiResponse;
import org.example.manufactura.dto.response.ConsultationResponseDto;
import org.example.manufactura.entity.RequestStatus;
import org.example.manufactura.service.ConsultationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/consultations")
@CrossOrigin(origins = "*")
public class ConsultationController {

    @Autowired
    private ConsultationService consultationService;

    @PostMapping
    public ResponseEntity<ApiResponse<ConsultationResponseDto>> createConsultation(
            @Valid @RequestBody ConsultationRequestDto requestDto) {
        ConsultationResponseDto response = consultationService.createConsultationRequest(requestDto);
        return ResponseEntity.ok(ApiResponse.success("Запрос успешно отправлен", response));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<ConsultationResponseDto>>> getAllConsultations() {
        List<ConsultationResponseDto> consultations = consultationService.getAllConsultationRequests();
        return ResponseEntity.ok(ApiResponse.success("Консультации получены", consultations));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ConsultationResponseDto>> getConsultationById(@PathVariable Long id) {
        ConsultationResponseDto consultation = consultationService.getConsultationRequestById(id);
        return ResponseEntity.ok(ApiResponse.success("Консультация найдена", consultation));
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<ApiResponse<ConsultationResponseDto>> updateStatus(
            @PathVariable Long id,
            @RequestParam RequestStatus status) {
        ConsultationResponseDto updated = consultationService.updateRequestStatus(id, status);
        return ResponseEntity.ok(ApiResponse.success("Статус обновлен", updated));
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<ApiResponse<List<ConsultationResponseDto>>> getByStatus(@PathVariable RequestStatus status) {
        List<ConsultationResponseDto> consultations = consultationService.getRequestsByStatus(status);
        return ResponseEntity.ok(ApiResponse.success("Консультации по статусу получены", consultations));
    }

    @GetMapping("/statistics")
    public ResponseEntity<ApiResponse<Long>> getStatistics() {
        long newRequestsCount = consultationService.getStatistics();
        return ResponseEntity.ok(ApiResponse.success("Статистика получена", newRequestsCount));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteConsultation(@PathVariable Long id) {
        consultationService.deleteConsultationRequest(id);
        return ResponseEntity.ok(ApiResponse.success("Консультация удалена"));
    }
}