import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import HelpSection from './Components/HelpSection/HelpSection';
import AccessSection from './Components/AccessSection/AccessSection';
import Footer from './Components/Footer/Footer';
import Container from './Components/Container/Container';

import LoginPage from './Pages/LoginPage/LoginPage';
import SignupPage from './Pages/SignupPage/SignupPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Landing Page Route */}
                    <Route path="/" element={
                        <Container>
                            <Navbar /> 
                            <Hero />
                            <Features />
                            <HelpSection />
                            <AccessSection />
                            <Footer />
                        </Container>
                    } />

                    {/* Login Page Route */}
                    <Route path="/login" element={<LoginPage />} />

                    {/* Signup Page Route */}
                    <Route path="/signup" element={<SignupPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
