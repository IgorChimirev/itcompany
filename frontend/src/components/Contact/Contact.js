import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaTelegram,
    FaLinkedin,
    FaPaperPlane
} from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectDescription: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await axios.post('/api/consultations', formData);
            setSubmitStatus({ type: 'success', message: 'Запрос успешно отправлен! Мы свяжемся с вами в ближайшее время.' });
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                projectDescription: ''
            });
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Ошибка при отправке запроса. Пожалуйста, попробуйте еще раз.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="contact" className="contact" ref={ref}>
            <div className="container">
                <motion.div
                    className="contact-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.div className="contact-info" variants={itemVariants}>
                        <h2>Свяжитесь с нами</h2>
                        <p>
                            Готовы начать проект? Оставьте заявку, и мы свяжемся с вами
                            для бесплатной консультации.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <FaEnvelope size={24} color="#f98513" />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p>info@itcompany.com</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <FaPhone size={24} color="#f98513" />
                                </div>
                                <div>
                                    <h4>Телефон</h4>
                                    <p>+7 (999) 999-99-99</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <FaMapMarkerAlt size={24} color="#f98513" />
                                </div>
                                <div>
                                    <h4>Адрес</h4>
                                    <p>г. Москва, ул. Примерная, д. 123</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <h4>Мы в соцсетях</h4>
                            <div className="social-icons">
                                <a href="https://github.com/nazvanieqqqq" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FaGithub size={20} />
                                    GitHub
                                </a>
                                <a href="https://t.me/company" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FaTelegram size={20} />
                                    Telegram
                                </a>
                                <a href="https://linkedin.com/company/company" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FaLinkedin size={20} />
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="contact-form-container" variants={itemVariants}>
                        <form onSubmit={handleSubmit} className="consultation-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Имя *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Ваше имя"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="company">Компания</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Название компании"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Телефон</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+7 (999) 999-99-99"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="projectDescription">Описание проекта</label>
                                <textarea
                                    id="projectDescription"
                                    name="projectDescription"
                                    value={formData.projectDescription}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Расскажите о вашем проекте, целях и требованиях..."
                                ></textarea>
                            </div>

                            {submitStatus && (
                                <div className={`form-message ${submitStatus.type}`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <motion.button
                                type="submit"
                                className="cta-button submit-button"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                            >
                                <FaPaperPlane size={18} style={{ marginRight: '8px' }} />
                                {isSubmitting ? 'Отправка...' : 'Отправить запрос'}
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;