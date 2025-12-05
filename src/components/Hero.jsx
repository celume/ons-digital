import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <div className="brand-badge">
            <span className="badge-text">ONS3DM COLLECTIVE</span>
          </div>
          
          <h1 className="hero-title">
            <span className="gradient-text">ONS Digital</span>
          </h1>
          
          <p className="hero-subtitle">
            Elevating Brands Through Strategic Digital Marketing
          </p>
          
          <p className="hero-description">
            We are ONS3DM Collective - a cutting-edge digital marketing agency 
            that transforms your vision into powerful digital experiences. 
            From brand strategy to execution, we deliver results that matter.
          </p>
          
          <div className="hero-cta">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>
        
        <div className="hero-visual animate-float">
          <div className="visual-card glass-card">
            <div className="card-icon">🚀</div>
            <h3>Digital Excellence</h3>
            <p>Innovative strategies for modern brands</p>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
