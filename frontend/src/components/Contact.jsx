import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectDescription: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/consultation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Запрос отправлен! Мы свяжемся с вами в ближайшее время.');
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    projectDescription: ''
                });
            }
        } catch (error) {
            alert('Ошибка при отправке запроса');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Запросить консультацию</h2>
                <form onSubmit={handleSubmit} className="consultation-form">
                    <div className="form-row">
                        <input
                            type="text"
                            name="name"
                            placeholder="Ваше имя"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <input
                            type="text"
                            name="company"
                            placeholder="Компания"
                            value={formData.company}
                            onChange={handleChange}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Телефон"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <textarea
                        name="projectDescription"
                        placeholder="Опишите ваш проект..."
                        value={formData.projectDescription}
                        onChange={handleChange}
                        rows="5"
                    />
                    <button type="submit" className="cta-button">Отправить запрос</button>
                </form>
            </div>
        </section>
    );
};