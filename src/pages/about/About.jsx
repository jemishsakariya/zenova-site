import { ArrowRight, ArrowDown, Facebook, Twitter, Linkedin } from 'lucide-react';
import '../../styles/pages/about.scss';

const About = () => {
    const teamMembers = [
        {
            name: "JOHN SMITH",
            role: "Co-Founder & CEO",
            image: "https://i.pravatar.cc/400?u=john",
            socials: [<Facebook />, <Twitter />, <Linkedin />]
        },
        {
            name: "SARAH ADAMS",
            role: "Head of Design",
            image: "https://i.pravatar.cc/400?u=sarah",
            socials: [<Facebook />, <Twitter />, <Linkedin />]
        },
        {
            name: "EMILY JOHNSON",
            role: "Lead Web Developer",
            image: "https://i.pravatar.cc/400?u=emily",
            socials: [<Facebook />, <Twitter />, <Linkedin />]
        },
        {
            name: "WILLIAM LEE",
            role: "Lead Backend Developer",
            image: "https://i.pravatar.cc/400?u=william",
            socials: [<Facebook />, <Twitter />, <Linkedin />]
        }
    ];

    const achievements = [
        {
            date: "September 2023",
            title: "GLOBAL RECOGNITION FOR INNOVATION",
            desc: "In 2023, our digital agency gained global acclaim for innovative solutions, setting new standards in the ever-evolving digital landscape."
        },
        {
            date: "March 2019",
            title: "INDUSTRY LEADERSHIP ACKNOWLEDGED",
            desc: "Recognized as an industry leader in 2019, our agency received prestigious awards, affirming our commitment to excellence and client satisfaction."
        },
        {
            date: "August 2015",
            title: "EXPANSION INTO INTERNATIONAL MARKETS",
            desc: "Expanding horizons in 2015, our agency successfully entered international markets, establishing a global presence and serving clients on a broader scale."
        },
        {
            date: "January 2010",
            title: "PIONEERING THE DIGITAL FRONTIER",
            desc: "In 2010, our agency was born, pioneering the digital frontier and establishing core principles that have guided us through a decade of innovation."
        }
    ];

    return (
        <div className="about-page">
            <div className="about-hero">
                <div className="hero-card left-card">
                    <div className="card-content">
                        <h1 className="hero-title">
                            <div className="title-row">
                                <span>ELEVATING BRANDS</span>
                                <div className="cta-button">
                                    <div className="icon-circle">
                                        <ArrowRight size={24} className="arrow-icon" />
                                    </div>
                                    <span className="cta-text">START A PROJECT</span>
                                </div>
                            </div>
                            <span className="highlight-text">IN THE DIGITAL AGE</span>
                        </h1>
                    </div>
                </div>

                <div className="hero-right-card">
                    <div className="stats-grid">
                        <div className="stat-box">
                            <span className="stat-label">CLIENTS</span>
                            <h2 className="stat-value">200+</h2>
                        </div>
                        <div className="stat-box">
                            <span className="stat-label">PROJECTS</span>
                            <h2 className="stat-value">280+</h2>
                        </div>
                        <div className="stat-box">
                            <span className="stat-label">HAPPY CLIENTS</span>
                            <h2 className="stat-value">100%</h2>
                        </div>
                        <div className="stat-box">
                            <span className="stat-label">FOLLOWER</span>
                            <h2 className="stat-value">420K</h2>
                        </div>
                    </div>
                    <div className="hero-footer">
                        <div className="know-more">
                            <div className="icon-circle">
                                <ArrowDown className="arrow-icon" />
                            </div>
                            <span>KNOW MORE</span>
                        </div>
                    </div>
                </div>
            </div>

            <section className="achievements-section">
                <div className="achievements-header-card">
                    <h2>OUR ACHIEVEMENTS</h2>
                </div>

                <div className="achievements-grid">
                    {achievements.map((item, index) => (
                        <div className="achievement-card" key={index}>
                            <div className="top-content">
                                <span className="date">{item.date}</span>
                                <h3>{item.title}</h3>
                            </div>
                            <div className="bottom-content">
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="team-section">
                <div className="team-header-card">
                    <h2>MEET THE BRILLIANT MINDS BEHIND ZENOVA</h2>
                    <div className="all-members-btn">
                        <div className="icon-circle">
                            <ArrowRight className="arrow-icon" />
                        </div>
                        <span>ALL MEMBERS</span>
                    </div>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div className="team-card" key={index}>
                            <div className="member-info">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                            <div className="member-image-container">
                                <img src={member.image} alt={member.name} />
                            </div>
                            <div className="social-links">
                                {member.socials.map((icon, sIndex) => (
                                    <div className="social-icon" key={sIndex}>
                                        {icon}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default About;