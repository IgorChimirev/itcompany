package org.example.manufactura.service.impl;

import org.example.manufactura.entity.ConsultationRequest;
import org.example.manufactura.service.EmailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    private static final Logger logger = LoggerFactory.getLogger(EmailServiceImpl.class);

    @Override
    @Async
    public void sendConsultationNotification(ConsultationRequest request) {
        // Логируем запрос вместо отправки email
        logger.info("=== НОВАЯ ЗАЯВКА НА КОНСУЛЬТАЦИЮ (PostgreSQL) ===");
        logger.info("ID: {}", request.getId());
        logger.info("Имя: {}", request.getName());
        logger.info("Email: {}", request.getEmail());
        logger.info("Компания: {}", request.getCompany() != null ? request.getCompany() : "Не указано");
        logger.info("Телефон: {}", request.getPhone() != null ? request.getPhone() : "Не указано");
        logger.info("Описание проекта: {}", request.getProjectDescription() != null ? request.getProjectDescription() : "Не указано");
        logger.info("Время: {}", request.getCreatedAt());
        logger.info("Статус: {}", request.getStatus());
        logger.info("=================================================");
    }
}