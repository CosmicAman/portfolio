import React, { useEffect, useState } from 'react';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './index.css'; // Include your existing styles

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Video Background */}
      <video className='video-background' autoPlay loop muted>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Responsive Navigation Bar */}
      <nav>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={isOpen ? 'open' : ''}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
