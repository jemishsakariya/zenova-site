// import logo from "../../assets/images/logo.jpg";
import "../../styles/components/headers.scss";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Headers = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact Us', path: '/contact-us' }
    ];

    return (
        <div className="headers-container">
            <div className="headers-logo">
                <div>Zenova</div>
            </div>
            <div className="buttons-container">
                {links.map((link, index) => (
                    <div key={index} className={`nav-button ${index === links.length - 1 ? 'primary' : ''}`}>
                        <span className={`text ${location.pathname === link.path ? 'active' : ''}`} onClick={() => navigate(link.path)}>{link.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Headers