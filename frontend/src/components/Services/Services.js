// Services.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaCode,
    FaServer,
    FaShieldAlt,
    FaDatabase,
    FaRobot,
    FaCogs,
    FaMicrochip,
    FaCloud,
    FaSync,
    FaBrain
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const services = [
        {
            icon: FaCode,
            title: 'Full-Cycle Веб-разработка',
            description: 'Создаем мощные бизнес-приложения под ключ с использованием современных технологий: Spring Boot, Java EE, React/Vue.js, Kotlin.',
            features: ['SPA приложения', 'Корпоративные порталы', 'Интернет-магазины', 'Комплексные бэкенд-решения']
        },
        {
            icon: FaServer,
            title: 'Микросервисная Архитектура & DevOps',
            description: 'Строим масштабируемые и отказоустойчивые системы с использованием Docker и современных DevOps практик.',
            features: ['Docker-контейнеризация', 'Микросервисная архитектура', 'CI/CD настройка', 'Автоматизация развертывания']
        },
        {
            icon: FaShieldAlt,
            title: 'Интеграции & Безопасность',
            description: 'Обеспечиваем надежное взаимодействие систем и защиту данных с интеграцией сторонних API и сервисов.',
            features: ['Интеграция платежных систем', 'CRM/ERP интеграция', 'Аутентификация и авторизация', 'Шифрование данных']
        },
        {
            icon: FaDatabase,
            title: 'Базы Данных & High Availability',
            description: 'Гарантируем доступность и производительность данных с отказоустойчивой архитектурой баз данных.',
            features: ['PostgreSQL оптимизация', 'High Availability решения', 'Репликация данных', 'Резервное копирование']
        },
        {
            icon: FaCogs,
            title: 'Data Engineering & Автоматизация',
            description: 'Превращаем данные в бизнес-возможности с помощью парсинга, автоматизации и аналитических решений.',
            features: ['Парсинг веб-данных', 'Автоматизация бизнес-процессов', 'Арбитраж трафика', 'Email-рассылки']
        },
        {
            icon: FaBrain,
            title: 'AI & Машинное Обучение',
            description: 'Внедряем интеллектуальные решения в бизнес-процессы с использованием современных AI технологий.',
            features: ['AI-агенты и чат-боты', 'Компьютерное зрение', 'RAG-системы', 'Прогнозная аналитика']
        },
        {
            icon: FaMicrochip,
            title: 'Мобильная разработка',
            description: 'Разрабатываем нативные и кроссплатформенные мобильные приложения для iOS и Android.',
            features: ['Нативные приложения', 'React Native', 'Flutter', 'Гибридные решения']
        },
        {
            icon: FaCloud,
            title: 'Облачные решения',
            description: 'Развертываем и настраиваем облачную инфраструктуру для масштабирования вашего бизнеса.',
            features: ['AWS, Azure, Google Cloud', 'Микросервисная архитектура', 'Контейнеризация', 'DevOps практики']
        },
        {
            icon: FaSync,
            title: 'Техническая поддержка',
            description: 'Обеспечиваем бесперебойную работу ваших приложений и оперативно решаем возникающие проблемы.',
            features: ['Мониторинг 24/7', 'Регулярные обновления', 'Исправление ошибок', 'Консультации']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="services" className="services" ref={ref}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    Наши услуги
                </motion.h2>
                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                className="service-card"
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="service-icon">
                                    <IconComponent size={32} color="#f98513" />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;