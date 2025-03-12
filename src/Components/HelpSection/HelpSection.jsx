import React from 'react';
import './HelpSection.css';

const HelpSection = () => {
    return (
        <section className="help" id="how-it-works">
            <h2 className="help__title">How Can NexenGPT Help You?</h2>
            <p className="help__description">
                Get instant help with university tasks, from finding tutors to navigating your student portal.
            </p>
            <div className="help__box">
                <img
                src="Images/ChatInterface.png"
                alt="Chat Interface Screenshot"
                className="help__chat-screenshot"
                />
                <p className="help__sample-title">Sample Questions you can ask NexenGPT</p>
                <div className="help__sample-questions">
                <span className="help__sample-question">How do I reset my password?</span>
                <span className="help__sample-question">Where can I find my course schedule?</span>
                <span className="help__sample-question">Who can I contact for career advice?</span>
                </div>
            </div>
        </section>
    );
};

export default HelpSection;
