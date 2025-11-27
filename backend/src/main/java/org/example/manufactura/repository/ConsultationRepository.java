package org.example.manufactura.repository;

import org.example.manufactura.entity.ConsultationRequest;
import org.example.manufactura.entity.RequestStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ConsultationRepository extends JpaRepository<ConsultationRequest, Long> {

    List<ConsultationRequest> findByStatus(RequestStatus status);

    List<ConsultationRequest> findByEmail(String email);

    List<ConsultationRequest> findByCreatedAtAfter(LocalDateTime date);

    @Query("SELECT COUNT(c) FROM ConsultationRequest c WHERE c.status = :status")
    long countByStatus(@Param("status") RequestStatus status);

    @Query("SELECT c FROM ConsultationRequest c ORDER BY c.createdAt DESC")
    List<ConsultationRequest> findAllOrderByCreatedAtDesc();

    @Query(value = "SELECT * FROM consultation_requests WHERE created_at >= :startDate AND created_at < :endDate", nativeQuery = true)
    List<ConsultationRequest> findByCreatedAtBetween(@Param("startDate") LocalDateTime startDate,
                                                     @Param("endDate") LocalDateTime endDate);
}