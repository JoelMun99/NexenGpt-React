import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
        <div className="hero__glass-background">
          <h1 className="hero__title">
            Empowering Nexen Students to Navigate University Life with Ease
          </h1>
          <p className="hero__description">
            Whether you're a new student or just looking for help, NexenGPT is here to assist you every step of the way.
          </p>
          <Link to="/signup">
          <button className="hero__get-started"> Get Started</button>
          </Link>
        </div>
      </section>      
    );
};

export default Hero;
