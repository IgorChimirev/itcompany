
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTelegram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <motion.div
                        className="footer-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3>ITCompany</h3>
                        <p>
                            Создаем инновационные IT-решения, которые помогают бизнесу
                            достигать новых высот. Качество, надежность и инновации -
                            наши основные принципы.
                        </p>
                        <div className="footer-social">
                            <a href="https://github.com/nazvanieqqqq" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaGithub size={18} />
                                GitHub
                            </a>
                            <a href="https://t.me/company" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaTelegram size={18} />
                                Telegram
                            </a>
                            <a href="https://linkedin.com/company/company" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaLinkedin size={18} />
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="footer-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4>Услуги</h4>
                        <ul className="footer-links">
                            <li><a href="#services">Веб-разработка</a></li>
                            <li><a href="#services">Микросервисы & DevOps</a></li>
                            <li><a href="#services">AI & Machine Learning</a></li>
                            <li><a href="#services">Облачные решения</a></li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="footer-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4>Компания</h4>
                        <ul className="footer-links">
                            <li><a href="#about">О нас</a></li>
                            <li><a href="#tech">Технологии</a></li>
                            <li><a href="#contact">Контакты</a></li>
                            <li><a href="#contact">Карьера</a></li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="footer-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4>Контакты</h4>
                        <div className="footer-contact">
                            <p>
                                <FaEnvelope size={16} />
                                info@itcompany.com
                            </p>
                            <p>
                                <FaPhone size={16} />
                                +7 (999) 999-99-99
                            </p>
                            <p>
                                <FaMapMarkerAlt size={16} />
                                г. Москва, ул. Примерная, д. 123
                            </p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <p>&copy; {currentYear} ITCompany. Все права защищены.</p>
                    <div className="footer-legal">
                        <a href="#privacy">Политика конфиденциальности</a>
                        <a href="#terms">Условия использования</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;