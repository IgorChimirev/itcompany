
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
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

    // Закрываем меню при клике на ссылку
    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { name: 'Главная', href: '#home' },
        { name: 'О компании', href: '#about' },
        { name: 'Услуги', href: '#services' },
        { name: 'Технологии', href: '#tech' },
        { name: 'Контакты', href: '#contact' }
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <span>ITCompany</span>
                    </div>

                    <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="nav-link"
                                onClick={handleNavClick}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Меню"
                    >
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;