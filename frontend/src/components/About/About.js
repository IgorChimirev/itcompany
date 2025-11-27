
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaLightbulb, FaShieldAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

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
        hidden: { y: 30, opacity: 0 },
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
        <section id="about" className="about" ref={ref}>
            <div className="container">
                <motion.div
                    className="about-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.div className="about-text" variants={itemVariants}>
                        <h2>О компании</h2>
                        <p>
                            Мы - команда профессионалов, которая занимается разработкой
                            программного обеспечения с 2018 года. Наша компания специализируется
                            на создании современных веб-приложений, мобильных приложений
                            и внедрении искусственного интеллекта в бизнес-процессы.
                        </p>
                        <p>
                            Наш подход сочетает в себе глубокое понимание бизнес-задач,
                            передовые технологии и внимание к деталям. Мы гордимся тем,
                            что наши решения помогают компаниям расти и достигать своих целей.
                        </p>
                        <div className="about-features">
                            <div className="feature">
                                <h3>Миссия</h3>
                                <p>Создавать IT-решения, которые делают бизнес эффективнее и клиентов счастливее.</p>
                            </div>
                            <div className="feature">
                                <h3>Ценности</h3>
                                <p>Инновации, качество, прозрачность и долгосрочное партнерство.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="about-visual" variants={itemVariants}>
                        <div className="about-cards">
                            <div className="about-card card-1">
                                <div className="card-icon">
                                    <FaRocket size={32} color="#f98513" />
                                </div>
                                <h4>Современные технологии</h4>
                                <p>Используем актуальные технологии и методологии разработки.</p>
                            </div>
                            <div className="about-card card-2">
                                <div className="card-icon">
                                    <FaLightbulb size={32} color="#f98513" />
                                </div>
                                <h4>Инновации</h4>
                                <p>Внедряем AI и машинное обучение в ваши бизнес-процессы.</p>
                            </div>
                            <div className="about-card card-3">
                                <div className="card-icon">
                                    <FaShieldAlt size={32} color="#f98513" />
                                </div>
                                <h4>Надежность</h4>
                                <p>Гарантируем безопасность и стабильность наших решений.</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;