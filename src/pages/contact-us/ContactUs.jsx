import React, { useState } from 'react';
import { ArrowRight, ArrowDown, ArrowUpRight, ChevronDown } from 'lucide-react';
import '../../styles/pages/contact.scss';

const ContactUs = () => {
    const [activeTab, setActiveTab] = useState('EMAILS');
    const [agreed, setAgreed] = useState(false);

    const services = [
        "GAME DEVELOPMENT",
        "WEBSITE DESIGN",
        "WEBSITE DEVELOPMENT",
        "MOBILE APP DEVELOPMENT",
    ];

    const stats = [
        { label: "CLIENTS", value: "200+" },
        { label: "PROJECTS", value: "280+" },
        { label: "HAPPY CLIENTS", value: "100%" },
        { label: "FOLLOWER", value: "420K" }
    ];

    const contactInfo = {
        EMAILS: [
            { label: "General Inquiries", value: "INFO@ZENOVA.COM" },
            { label: "Business Collaborations", value: "PARTNERSHIPS@ZENOVA.COM" },
            { label: "Job Opportunities", value: "CAREERS@ZENOVA.COM" }
        ],
        PHONE: [
            { label: "General Inquiries", value: "+1 (555) 000-0000" },
            { label: "Business Collaborations", value: "+1 (555) 111-1111" }
        ],
        OFFICE: [
            { label: "Main Office", value: "123 Innovation Drive, Tech City" },
            { label: "Regional Hub", value: "456 Creative St, Design Quarter" }
        ]
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <div className="contact-hero">
                <div className="hero-card left-card">
                    <div className="card-content">
                        <h1 className="hero-title">
                            <div className="title-row">
                                <span>GET IN TOUCH</span>
                                <div className="cta-button">
                                    <div className="icon-circle">
                                        <ArrowRight size={24} className="arrow-icon" />
                                    </div>
                                    <span className="cta-text">START A PROJECT</span>
                                </div>
                            </div>
                            <span className="highlight-text">WITH US TODAY!</span>
                        </h1>
                        <p className="hero-description">
                            At NexGen, we value your inquiries, feedback, and collaborations. Whether you are interested in our digital services, have questions about our projects, or want to explore potential partnerships, we encourage you to reach out to our dedicated team.
                        </p>
                    </div>

                    <div className="ticker-wrapper">
                        <div className="ticker">
                            {services.concat(services).map((item, index) => (
                                <React.Fragment key={index}>
                                    <span className="ticker-item">{item}</span>
                                    <span className="ticker-dot">•</span>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="hero-right-card">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div className="stat-box" key={index}>
                                <span className="stat-label">{stat.label}</span>
                                <h2 className="stat-value">{stat.value}</h2>
                            </div>
                        ))}
                    </div>
                    <div className="hero-footer">
                        <div className="reach-us">
                            <div className="icon-circle">
                                <ArrowDown className="arrow-icon" />
                            </div>
                            <span>REACH US</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="contact-main-content">
                {/* Left: Contact Info */}
                <div className="contact-details-card">
                    <div className="tabs-nav">
                        {['PHONE NUMBER', 'EMAILS', 'OFFICE LOCATIONS'].map((tab) => (
                            <button
                                key={tab}
                                className={`tab-btn ${activeTab === tab.split(' ')[0] ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.split(' ')[0])}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="contact-list">
                        {contactInfo[activeTab]?.map((item, index) => (
                            <div className="contact-item" key={index}>
                                <p className="label">{item.label}</p>
                                <div className="value-box">
                                    <span>{item.value}</span>
                                    <div className="icon-button">
                                        <ArrowUpRight strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="contact-form-card">
                    <form className="contact-form">
                        <div className="form-grid">
                            <div className="form-group">
                                <label>FIRST NAME</label>
                                <div className="input-wrapper">
                                    <input type="text" placeholder="Enter First Name" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>LAST NAME</label>
                                <div className="input-wrapper">
                                    <input type="text" placeholder="Enter Last Name" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>EMAIL</label>
                                <div className="input-wrapper">
                                    <input type="email" placeholder="Enter your Email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>PHONE NUMBER</label>
                                <div className="input-wrapper">
                                    <input type="tel" placeholder="Enter Phone Number" />
                                </div>
                            </div>
                            <div className="form-group full-width message-group">
                                <label>MESSAGE</label>
                                <div className="input-wrapper">
                                    <textarea placeholder="Enter your Message"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="form-footer">
                            <div className="agreement-check" onClick={() => setAgreed(!agreed)}>
                                <div className={`checkbox-custom ${agreed ? 'checked' : ''}`}></div>
                                <span className="agreement-text">I agree with Terms of Use and Privacy Policy</span>
                            </div>
                            <button type="submit" className="submit-btn" onClick={(e) => e.preventDefault()}>
                                <span className="btn-text">SEND YOUR MESSAGE</span>
                                <ArrowUpRight className="btn-icon" strokeWidth={2.5} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;