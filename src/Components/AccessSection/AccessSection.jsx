import React from 'react';
import { Link } from 'react-router-dom';
import './AccessSection.css';

const AccessSection = () => {
    return (
        <section className="access">
            <h2 className="access__title">Access NexenGPT Anytime, Anywhere</h2>
            <p className="access__description">
                NexenGPT is here whenever you need it—helping you navigate university life, answer questions, and find essential information quickly and easily.
            </p>
            <Link to="/login">
            <button className="access__log-in">Log in to get started</button>
            </Link>
            <Link to="/signup">
            <button className="access__sign-up">Sign up now</button>
            </Link>
        </section>
    );
};

export default AccessSection;
