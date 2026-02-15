import React, { useState } from "react";
import "../../styles/components/headers.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Headers = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact Us', path: '/contact-us' }
    ];

    const handleNavigate = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    return (
        <div className="headers-container">
            <div className="headers-logo" onClick={() => handleNavigate('/')} style={{ cursor: 'pointer' }}>
                <div>Zenova</div>
            </div>

            <div className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
                <div className="buttons-container">
                    {links.map((link, index) => (
                        <div
                            key={index}
                            className={`nav-button ${index === links.length - 1 ? 'primary' : ''} ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => handleNavigate(link.path)}
                        >
                            <span className="text">{link.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
        </div>
    );
};

export default Headers;