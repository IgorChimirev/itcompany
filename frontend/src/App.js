import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <About />
            <Services />
            <TechStack />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;