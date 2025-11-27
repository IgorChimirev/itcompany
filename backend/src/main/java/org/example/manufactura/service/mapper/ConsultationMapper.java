package org.example.manufactura.service.mapper;

import org.example.manufactura.dto.request.ConsultationRequestDto;
import org.example.manufactura.dto.response.ConsultationResponseDto;
import org.example.manufactura.entity.ConsultationRequest;
import org.springframework.stereotype.Component;

@Component
public class ConsultationMapper {

    public ConsultationRequest toEntity(ConsultationRequestDto dto) {
        if (dto == null) {
            return null;
        }

        ConsultationRequest entity = new ConsultationRequest();
        entity.setName(dto.getName());
        entity.setEmail(dto.getEmail());
        entity.setCompany(dto.getCompany());
        entity.setPhone(dto.getPhone());
        entity.setProjectDescription(dto.getProjectDescription());

        return entity;
    }

    public ConsultationResponseDto toDto(ConsultationRequest entity) {
        if (entity == null) {
            return null;
        }

        ConsultationResponseDto dto = new ConsultationResponseDto();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setEmail(entity.getEmail());
        dto.setCompany(entity.getCompany());
        dto.setPhone(entity.getPhone());
        dto.setProjectDescription(entity.getProjectDescription());
        dto.setCreatedAt(entity.getCreatedAt());
        dto.setStatus(entity.getStatus());

        return dto;
    }
}