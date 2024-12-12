import React from 'react';
import logo from '../../assets/NexenIcons/NexenLogo.svg';
import facebook  from '../../assets/NexenIcons/facebook.svg';
import twitter  from '../../assets/NexenIcons/twitter.svg'
import instagram  from '../../assets/NexenIcons/Instagram.svg';
import youtube  from '../../assets/NexenIcons/Youtube.svg';
import Linkedin  from '../../assets/NexenIcons/Linkedin.svg';
import Tiktok  from '../../assets/NexenIcons/Tiktok.svg';

import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__nav'>
                <img src={logo} alt='Nexen University Logo' className='footer__logo'/>
                <nav className='footer__navigation'>
                    <a href="#about" className='footer__nav-link'>About NexenGPT</a>
                    <a href="#privacy" className='footer__nav-link'>Privacy Policy</a>
                    <a href="#contact" className='footer__nav-link'>Contact Us</a>
                </nav>
            </div>
            <div className="footer__address">
                Nexen University<br />
                Kileleshwa Leicester<br />
                KTY1 89Y Kenya
            </div>
            <div className="footer__copyright">
                © 2024 Nexen University
            </div>
            <div className="footer__icons">
                <a href="#" className="footer__icon-link">
                    <img src={facebook} alt="Facebook" className="footer__icon" />
                </a>
                <a href="#" className="footer__icon-link">
                    <img src={twitter} alt="Twitter" className="footer__icon" />
                </a>
                <a href="#" className="footer__icon-link">
                    <img src={instagram} alt="Instagram" className="footer__icon" />
                </a>
                <a href="#" className="footer__icon-link">
                    <img src={youtube} alt="YouTube" className="footer__icon" />
                </a>
                <a href="#" className="footer__icon-link">
                    <img src={Linkedin} alt="LinkedIn" className="footer__icon" />
                </a>
                <a href="#" className="footer__icon-link">
                    <img src={Tiktok} alt="TikTok" className="footer__icon" />
                </a>
            </div>
    </footer>
  )
}

export default Footer