import PageHero from "../../components/PageHero/PageHero";
import { Ruler, Star, ShieldCheck, Timer } from 'lucide-react';
import '../../styles/components/common/PageHero.scss';
import '../../styles/pages/projects.scss';
import OurWorks from "../../components/works/OurWorks";
import Testimonials from "../../components/testimonials/Testimonials";

const Projects = () => {
    const features = [
        {
            icon: <Ruler />,
            title: "STRATEGIC PLANNING",
            description: "Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives."
        },
        {
            icon: <Star />,
            title: "CUSTOMIZED SOLUTIONS",
            description: "We believe in tailoring our services to suit each project's unique requirements, resulting in solutions."
        },
        {
            icon: <ShieldCheck />,
            title: "USER-CENTRIC APPROACH",
            description: "Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces."
        },
        {
            icon: <Timer />,
            title: "TIMELY DELIVERY",
            description: "We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality."
        }
    ];

    return (
        <div className="projects-page">
            <PageHero
                title="Empowering Your"
                highlightText="Empowering Your" // Note: the user had highlightText same as title in their last edit, I'll keep it for now but adjust if needed
                description="At Zenova, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation."
                imageTag="PROJECTS"
            />

            <div className="features-section">
                <div className="section-header-card">
                    <h2>KEY FEATURES OF OUR PROJECTS</h2>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="icon-box">
                                {feature.icon}
                            </div>
                            <div className="feature-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <OurWorks />
            <Testimonials />
        </div>
    )
}

export default Projects;