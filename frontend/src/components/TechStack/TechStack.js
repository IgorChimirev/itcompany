
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    SiReact,
    SiAngular,
    SiVuedotjs,
    SiTypescript,
    SiSpring,
    SiNodedotjs,
    SiPython,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiDocker,
    SiKubernetes,
    SiTensorflow,
    SiPytorch
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import './TechStack.css';

const TechStack = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const technologies = [
        { name: 'React', category: 'frontend', icon: SiReact, color: '#61DAFB' },
        { name: 'Angular', category: 'frontend', icon: SiAngular, color: '#DD0031' },
        { name: 'Vue.js', category: 'frontend', icon: SiVuedotjs, color: '#4FC08D' },
        { name: 'TypeScript', category: 'frontend', icon: SiTypescript, color: '#3178C6' },
        { name: 'Spring Boot', category: 'backend', icon: SiSpring, color: '#6DB33F' },
        { name: 'Node.js', category: 'backend', icon: SiNodedotjs, color: '#339933' },
        { name: 'Python', category: 'backend', icon: SiPython, color: '#3776AB' },
        { name: 'Java', category: 'backend', icon: FaJava, color: '#007396' },
        { name: 'PostgreSQL', category: 'database', icon: SiPostgresql, color: '#336791' },
        { name: 'MongoDB', category: 'database', icon: SiMongodb, color: '#47A248' },
        { name: 'Redis', category: 'database', icon: SiRedis, color: '#DC382D' },
        { name: 'AWS', category: 'cloud', icon: FaAws, color: '#FF9900' },
        { name: 'Docker', category: 'devops', icon: SiDocker, color: '#2496ED' },
        { name: 'Kubernetes', category: 'devops', icon: SiKubernetes, color: '#326CE5' },
        { name: 'TensorFlow', category: 'ai', icon: SiTensorflow, color: '#FF6F00' },
        { name: 'PyTorch', category: 'ai', icon: SiPytorch, color: '#EE4C2C' }
    ];

    const categories = [
        { id: 'all', name: 'Все технологии' },
        { id: 'frontend', name: 'Фронтенд' },
        { id: 'backend', name: 'Бэкенд' },
        { id: 'database', name: 'Базы данных' },
        { id: 'cloud', name: 'Облака' },
        { id: 'devops', name: 'DevOps' },
        { id: 'ai', name: 'AI/ML' }
    ];

    const [activeCategory, setActiveCategory] = React.useState('all');

    const filteredTech = activeCategory === 'all'
        ? technologies
        : technologies.filter(tech => tech.category === activeCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <section id="tech" className="tech-stack" ref={ref}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    Стек технологий
                </motion.h2>

                <motion.div
                    className="category-filters"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </motion.div>

                <motion.div
                    className="tech-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    key={activeCategory}
                >
                    {filteredTech.map((tech, index) => {
                        const IconComponent = tech.icon;
                        return (
                            <motion.div
                                key={tech.name}
                                className="tech-card"
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="tech-icon">
                                    <IconComponent
                                        size={32}
                                        color={tech.color}
                                    />
                                </div>
                                <div className="tech-name">{tech.name}</div>
                                <div className="tech-category">{tech.category}</div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;