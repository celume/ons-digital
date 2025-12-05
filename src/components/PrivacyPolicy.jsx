import React, { useEffect } from 'react';
import './Legal.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <div className="container">
                <div className="legal-content glass-card">
                    <h1 className="gradient-text">Privacy Policy</h1>
                    <p className="last-updated">Last Updated: December 2024</p>

                    <section>
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to ONS3DM Collective ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                        </p>
                    </section>

                    <section>
                        <h2>2. Information We Collect</h2>
                        <p>
                            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. The personal information we collect includes:
                        </p>
                        <ul>
                            <li><strong>Name:</strong> To identify you and personalize our communication.</li>
                            <li><strong>Phone Number:</strong> To contact you regarding our services and updates.</li>
                            <li><strong>Email Address:</strong> To send you information, updates, and respond to inquiries.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. How We Use Your Information</h2>
                        <p>
                            We use the information we collect or receive for the following purposes:
                        </p>
                        <ul>
                            <li>To provide and manage our services.</li>
                            <li>To communicate with you, including sending you updates and marketing information.</li>
                            <li>To respond to your inquiries and solve any potential issues.</li>
                            <li>To improve our website and user experience.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Sharing Your Information</h2>
                        <p>
                            We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.
                        </p>
                    </section>

                    <section>
                        <h2>5. Security of Your Information</h2>
                        <p>
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                        </p>
                    </section>

                    <section>
                        <h2>6. Contact Us</h2>
                        <p>
                            If you have questions or comments about this policy, you may contact us at:
                        </p>
                        <p>
                            <strong>ONS3DM Collective</strong><br />
                            Email: onsdigital3dm@gmail.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
