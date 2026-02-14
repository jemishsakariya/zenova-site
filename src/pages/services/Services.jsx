import PageHero from '../../components/common/PageHero/PageHero';
import { Palette, Smartphone, Code2, Megaphone, ArrowUpRight, ArrowRight } from 'lucide-react';
import '../../styles/pages/services.scss';
import Testimonials from '../../components/testimonials/Testimonials';

const Services = () => {
    const servicesData = [
        {
            icon: <Palette size={24} />,
            title: "Web Design",
            description: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.",
            price: "$1,500",
            projects: [
                "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=500&auto=format&fit=crop",
                "https://cdn.displate.com/artwork/857x1200/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg"
            ]
        },
        {
            icon: <Smartphone size={24} />,
            title: "Mobile App Development",
            description: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.",
            price: "$2,500",
            projects: [
                "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=500&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=500&auto=format&fit=crop"
            ]
        }
    ];

    return (
        <div className="services-page">
            <PageHero
                title="OUR SOLUTIONS"
                description="At Zenova, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation."
                imageTag="SERVICES"
            />

            <div className="services-container">
                <div className="services-main-grid">
                    <div className="section-header-card">
                        <h2>Our Services</h2>
                    </div>

                    {servicesData.map((service, index) => (
                        <div className="service-row" key={index}>
                            <div className="service-info-card">
                                <div className="card-top">
                                    <div className="title-group">
                                        <div className="icon-box">
                                            {service.icon}
                                        </div>
                                        <h3>{service.title}</h3>
                                    </div>
                                    <button className="book-call">
                                        Book a call <ArrowUpRight className="arrow-icon" />
                                    </button>
                                </div>

                                <p className="service-desc">{service.description}</p>

                                <div className="price-tag">
                                    <span>STARTS FROM</span> {service.price}
                                </div>
                            </div>

                            <div className="service-projects-card">
                                <div className="projects-header">
                                    <h4>{service.title} Projects</h4>
                                    <a href="#" className="view-all">
                                        View All <ArrowUpRight size={18} />
                                    </a>
                                </div>

                                <div className="projects-grid">
                                    {service.projects.map((proj, pIndex) => (
                                        <div className="project-mini-card" key={pIndex}>
                                            <img src={proj} alt={`${service.title} project`} />
                                            <div className="project-overlay">
                                                <button className="open-btn">
                                                    <div className="icon-circle">
                                                        <ArrowUpRight size={14} />
                                                    </div>
                                                    Open Project
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Testimonials />
        </div>
    )
}

export default Services
