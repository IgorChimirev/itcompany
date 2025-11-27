import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Главная', href: '#home' },
        { name: 'О компании', href: '#about' },
        { name: 'Услуги', href: '#services' },
        { name: 'Технологии', href: '#tech' },
        { name: 'Контакты', href: '#contact' }
    ];

    return (
        <motion.header
            className={`header ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container">
                <div className="header-content">
                    <motion.div
                        className="logo"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <span>ITCompany</span>
                    </motion.div>

                    <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className="nav-link"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </nav>

                    <button
                        className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;