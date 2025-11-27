package org.example.manufactura.entity;



import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.time.LocalDateTime;

@Entity
@Table(name = "consultation_requests")
public class ConsultationRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Имя обязательно")
    @Size(max = 100, message = "Имя не должно превышать 100 символов")
    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @NotBlank(message = "Email обязателен")
    @Email(message = "Неверный формат email")
    @Size(max = 100, message = "Email не должен превышать 100 символов")
    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Size(max = 100, message = "Название компании не должно превышать 100 символов")
    @Column(name = "company", length = 100)
    private String company;

    @Size(max = 20, message = "Телефон не должен превышать 20 символов")
    @Column(name = "phone", length = 20)
    private String phone;

    @Column(name = "project_description", columnDefinition = "TEXT")
    private String projectDescription;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 20)
    private RequestStatus status = RequestStatus.NEW;

    public ConsultationRequest() {
        this.createdAt = LocalDateTime.now();
    }

    public ConsultationRequest(String name, String email, String company, String phone, String projectDescription) {
        this();
        this.name = name;
        this.email = email;
        this.company = company;
        this.phone = phone;
        this.projectDescription = projectDescription;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getProjectDescription() { return projectDescription; }
    public void setProjectDescription(String projectDescription) { this.projectDescription = projectDescription; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public RequestStatus getStatus() { return status; }
    public void setStatus(RequestStatus status) { this.status = status; }

    @PrePersist
    protected void onCreate() {
        if (createdAt == null) {
            createdAt = LocalDateTime.now();
        }
    }
}