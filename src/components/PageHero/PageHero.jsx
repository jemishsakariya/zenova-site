import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import '../../styles/components/common/PageHero.scss';

const PageHero = ({
    title = "OUR DIGITAL SOLUTIONS",
    highlightText = 'THAT DRIVE SUCCESS',
    description = "At Zenova, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation",
    buttonText = "START A PROJECT",
    marqueeItems = [
        "GAME DEVELOPMENT",
        "WEBSITE DESIGN",
        "WEBSITE DEVELOPMENT",
        "MOBILE APP DEVELOPMENT",
    ],
    imageSrc = "https://cdn.displate.com/artwork/857x1200/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg",
    imageTag = "WEB DEVELOPMENT.",
    blogButtonText = "VIEW BLOG",
    projectName,
    projectCategory
}) => {
    return (
        <section className="page-hero">
            <div className="hero-content">
                <div className="hero-card left-card">
                    <div className="card-content">
                        <h1 className="hero-title">
                            <div className="title-row">
                                <span>{title}</span>
                                <div className="cta-button">
                                    <div className="icon-circle">
                                        <ArrowRight size={24} className="arrow-icon" />
                                    </div>
                                    <span className="cta-text">{buttonText}</span>
                                </div>
                            </div>
                            <span className="highlight-text">{highlightText}</span>
                        </h1>
                        <p className="hero-description">{description}</p>
                    </div>

                    <div className="ticker-wrapper">
                        <div className="ticker">
                            {marqueeItems.concat(marqueeItems).map((item, index) => (
                                <React.Fragment key={index}>
                                    <span className="ticker-item">{item}</span>
                                    <span className="ticker-dot">•</span>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="hero-card right-card">
                    <div className="image-container">
                        <img src={imageSrc} alt="Hero Visual" />
                        <div className="image-overlay">
                            <button className="view-blog-btn">
                                <span className="icon-circle">
                                    <ArrowUpRight size={20} />
                                </span>
                                {blogButtonText}
                            </button>
                            <div className="category-tag">
                                {imageTag}
                            </div>
                        </div>
                    </div>
                    {(projectName || projectCategory) && (
                        <div className="project-info">
                            {projectName && <h3 className="project-name">{projectName}</h3>}
                            {projectCategory && <p className="project-category">{projectCategory}</p>}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PageHero;
