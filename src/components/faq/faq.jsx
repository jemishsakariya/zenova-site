import { useState } from 'react';
import './../../styles/components/faq.scss';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    const faqData = [
        {
            question: "How long does it take to complete a web development project?",
            answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
        },
        {
            question: "Can you handle large-scale web applications?",
            answer: "Yes, we specialize in building scalable web applications using modern technologies and best practices to ensure performance and reliability."
        },
        {
            question: "Do you provide maintenance and support after launch?",
            answer: "Absolutely! We offer ongoing support and maintenance packages to keep your website secure, up-to-date, and performing optimally."
        },
        {
            question: "What technologies do you specialize in?",
            answer: "We are experts in a wide range of technologies including React, Next.js, Node.js, Python, and various cloud platforms like AWS and Azure."
        },
        {
            question: "Is my website going to be mobile-friendly?",
            answer: "Every website we build is fully responsive and optimized for all devices, ensuring a seamless experience for your users on mobile, tablet, and desktop."
        }
    ];

    return (
        <>
            <div className="faq-header">
                <div className="faq-heading">FREQUENTLY ASKED QUESTIONS</div>
                <div className="faq-view-all">
                    <button className="view-all-btn">
                        <div className="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#B3B3B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="text">View All</span>
                    </button>
                </div>
            </div>

            <div className="faq-section">
                <div className="faq-content-wrapper">
                    {/* Left Side: FAQ List */}
                    <div className="faq-list">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="faq-item-header">
                                    <div className="faq-question">{item.question}</div>
                                    <div className="faq-toggle-btn">
                                        {activeIndex === index ? (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19" stroke="#E5EEF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        ) : (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 5V19M5 12H19" stroke="#E5EEF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                {activeIndex === index && (
                                    <>
                                        <div className="faq-divider"></div>
                                        <div className="faq-answer">
                                            {item.answer}
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="contact-form-container">
                        <div className="form-header">
                            <h3>Ask Your Question</h3>
                            <div className="form-divider"></div>
                        </div>

                        <form className="contact-form">
                            <div className="form-group">
                                <label>NAME</label>
                                <div className="input-wrapper">
                                    <input type="text" placeholder="Enter your name" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>EMAIL</label>
                                <div className="input-wrapper">
                                    <input type="email" placeholder="Enter your email" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>YOUR QUESTION</label>
                                <div className="input-wrapper">
                                    <textarea placeholder="Enter Your Question Here..."></textarea>
                                </div>
                            </div>

                            <button type="submit" className="submit-btn transition-button">
                                SEND YOUR MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;