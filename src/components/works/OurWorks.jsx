import React from 'react';
import { ArrowUpRight, Smartphone, Code2 } from 'lucide-react';
import '../../styles/components/common/works.scss';

const OurWorks = () => {
    const projects = [
        {
            title: "ZENITH FITNESS APP",
            category: "Mobile App Development",
            time: "6 months",
            desc: "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070",
            tech: ["React Native", "Firebase", "Redux", "REST API", "MongoDB"],
            team: ["https://i.pravatar.cc/150?u=1", "https://i.pravatar.cc/150?u=2", "https://i.pravatar.cc/150?u=3", "https://i.pravatar.cc/150?u=4", "https://i.pravatar.cc/150?u=5"],
            icon: <Smartphone className="work-icon-svg" />
        },
        {
            title: "A-AURA ECOMMERCE",
            category: "Web Design & Development",
            time: "3 months",
            desc: "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=2070",
            tech: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
            team: ["https://i.pravatar.cc/150?u=6", "https://i.pravatar.cc/150?u=7", "https://i.pravatar.cc/150?u=8", "https://i.pravatar.cc/150?u=9", "https://i.pravatar.cc/150?u=10"],
            icon: <Code2 className="work-icon-svg" />
        }
    ];

    return (
        <section className="our-works-section">
            <div className="section-header-card">
                <h2 className="section-title">OUR WORKS</h2>
                <div className="all-works-btn">
                    <div className="icon-circle">
                        <ArrowUpRight className="arrow-icon" />
                    </div>
                    <span>ALL WORKS</span>
                </div>
            </div>

            <div className="works-list">
                {projects.map((project, index) => (
                    <div className="work-card" key={index}>
                        <div className="work-card-inner">
                            {/* Left: Project Info */}
                            <div className="work-info">
                                <div className="title-row">
                                    <div className="title-group">
                                        <div className="work-icon-box">{project.icon}</div>
                                        <h3 className="work-title">{project.title}</h3>
                                    </div>
                                    <div className="details-btn">
                                        <div className="icon-circle">
                                            <ArrowUpRight className="arrow-icon" />
                                        </div>
                                        <span>DETAILS</span>
                                    </div>
                                </div>

                                <div className="meta-tags">
                                    <span className="meta-tag">Category • <strong>{project.category}</strong></span>
                                    <span className="meta-tag">Time Taken • <strong>{project.time}</strong></span>
                                </div>

                                <p className="work-desc">{project.desc}</p>
                            </div>

                            {/* Center: Image */}
                            <div className="work-image-container">
                                <img src={project.image} alt={project.title} className="work-image" />
                            </div>

                            {/* Right: Tech & Team */}
                            <div className="work-extra">
                                <div className="tech-section">
                                    <h4 className="extra-label">TECHNOLOGIES USED</h4>
                                    <div className="tech-tags">
                                        {project.tech.map((tag, tIndex) => (
                                            <span key={tIndex} className="tech-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="team-section">
                                    <h4 className="extra-label">TEAM MEMBERS</h4>
                                    <div className="team-avatars">
                                        {project.team.map((avatar, aIndex) => (
                                            <img key={aIndex} src={avatar} alt="Team Member" className="avatar" />
                                        ))}
                                    </div>
                                </div>

                                <button className="book-call-btn">
                                    BOOK A CALL
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurWorks;
