import React from 'react';
import './Container.css';

const Container = ({ children }) => {
    return (
        <div className="container">
            {children} {/* Render any nested content */}
        </div>
    );
};

export default Container;
