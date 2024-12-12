import React from 'react';
import icon1 from '../../assets/NexenIcons/Instant.svg';
import icon2 from '../../assets/NexenIcons/Personalised.svg';
import icon3 from '../../assets/NexenIcons/navigation.svg';

import './Features.css';

const Features = () => {
    return (
        <section className="features" id="features">
            <h2 className="features__heading">Why Use NexenGPT?</h2>
            <div className="features__cards">
                <div className="features__card">
                    <img className="features__icon" src={icon1} alt="Instant Q&A" />
                    <h3 className="features__card-title">Instant Q&A</h3>
                    <p className="features__card-description">Quickly find information on campus tasks</p>
                    <ul className="features__list">
                        <li className="features__card-list-item">Course Details</li>
                        <li className="features__card-list-item">Assignment Help</li>
                    </ul>
                </div>
                <div className="features__card">
                    <img className="features__card-icon" src={icon2} alt="Personalized Assistance" />
                    <h3 className="features__card-title">Personalized Assistance</h3>
                    <p className="features__card-description">Tailored responses based on student profiles</p>
                </div>
                <div className="features__card">
                    <img className="features__card-icon" src={icon3} alt="Navigation Support" />
                    <h3 className="features__card-title">Navigation Support</h3>
                    <p className="features__card-description">Help with campus resources, portals, and key contacts</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
