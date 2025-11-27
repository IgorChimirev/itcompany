package org.example.manufactura.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class ConsultationRequestDto {

    @NotBlank(message = "Имя обязательно")
    private String name;

    @NotBlank(message = "Email обязателен")
    @Email(message = "Неверный формат email")
    private String email;

    private String company;

    private String phone;

    private String projectDescription;

    public ConsultationRequestDto() {}

    public ConsultationRequestDto(String name, String email, String company, String phone, String projectDescription) {
        this.name = name;
        this.email = email;
        this.company = company;
        this.phone = phone;
        this.projectDescription = projectDescription;
    }

    // Getters and Setters
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
}