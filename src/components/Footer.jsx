import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="gradient-text">ONS3DM Collective</h3>
                        <p className="footer-description">
                            Transforming brands through innovative digital marketing strategies.
                        </p>
                        <div className="company-info">
                            <p><strong>Trade Name:</strong> ONS3DM Collective</p>
                            <p><strong>Legal Name:</strong> ONS3DM Collective</p>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><a href="#digital-marketing">Digital Marketing</a></li>
                            <li><a href="#brand-strategy">Brand Strategy</a></li>
                            <li><a href="#social-media">Social Media</a></li>
                            <li><a href="#content-creation">Content Creation</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#careers">Careers</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Connect</h4>
                        <div className="social-links">
                            <a href="#" className="social-icon">📱</a>
                            <a href="#" className="social-icon">💼</a>
                            <a href="#" className="social-icon">📧</a>
                            <a href="#" className="social-icon">🌐</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <div className="footer-legal">
                        <p className="gst-number">
                            <strong>GST Number:</strong> 36AAJFO7731P1ZJ
                        </p>
                        <p className="copyright">
                            © 2024 ONS3DM Collective. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
