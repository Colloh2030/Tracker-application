import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to MyWebsite</h1>
        <p className="hero-subtitle">
          Empowering businesses with modern solutions tailored for success.
        </p>
        <div className="hero-buttons">
          <a href="#services" className="hero-btn hero-btn-primary">
            Get Started
          </a>
          <a href="#about" className="hero-btn hero-btn-secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
