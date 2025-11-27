
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    useEffect(() => {
        // Инициализация частиц после монтирования компонента
        if (window.particlesJS) {
            window.particlesJS('hero-particles', {
                "particles": {
                    "number": {
                        "value": 25,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#9bacd8"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        }
                    },
                    "opacity": {
                        "value": 0.4,
                        "random": true,
                        "anim": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#f98513",
                        "opacity": 0.3,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "grab": {
                            "distance": 200,
                            "line_linked": {
                                "opacity": 0.5
                            }
                        },
                        "push": {
                            "particles_nb": 3
                        }
                    }
                },
                "retina_detect": true
            });
        }
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
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
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="home" className="hero">
            <div id="hero-particles" className="hero-particles"></div>

            <div className="container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants}>
                        Инновационные IT-решения
                        <span className="gradient-text">для вашего бизнеса</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="hero-description">
                        Создаем современные веб-приложения и цифровые решения,
                        которые помогают бизнесу расти в эпоху цифровой трансформации
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-buttons">
                        <a href="#contact" className="cta-button">
                            Начать проект
                        </a>
                        <a href="#services" className="secondary-button">
                            Наши услуги
                        </a>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="hero-stats"
                    >
                        <div className="stat">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Завершенных проектов</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">Лет опыта</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">98%</div>
                            <div className="stat-label">Довольных клиентов</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;