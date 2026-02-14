import { ArrowUpRight } from 'lucide-react'
import "../../styles/components/common/testimonials.scss"

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="section-header-card">
                <h2 className="section-title">TESTIMONIALS</h2>
                <div className="all-testimonials-btn">
                    <div className="icon-circle">
                        <ArrowUpRight className="arrow-icon" />
                    </div>
                    <span>ALL TESTIMONIALS</span>
                </div>
            </div>

            <div className="testimonials-grid">
                {[
                    {
                        title: "ZENOVA TURNED OUR BUSINESS AROUND!",
                        text: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
                        name: "Sarah Thompson",
                        role: "CEO of BlueBloom",
                        avatar: "https://i.pravatar.cc/150?u=a"
                    },
                    {
                        title: "ZENOVA TURNED OUR BUSINESS AROUND!",
                        text: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
                        name: "Wade Warren",
                        role: "Art Director",
                        avatar: "https://i.pravatar.cc/150?u=b"
                    },
                    {
                        title: "WORKING WITH ZENOVA WAS A PLEASURE.",
                        text: "Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
                        name: "Lisa Williams",
                        role: "CEO of HealthTech",
                        avatar: "https://i.pravatar.cc/150?u=c"
                    },
                    {
                        title: "ZENOVA'S WEB DESIGN TEAM BROUGHT OUR VISION TO LIFE.",
                        text: "Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.",
                        name: "Jennifer Lee",
                        role: "COO of Foodie Haven",
                        avatar: "https://i.pravatar.cc/150?u=d"
                    }
                ].map((item, index) => (
                    <div className="testimonial-card" key={index}>
                        <div className="testimonial-content">
                            <h3 className="testimonial-title">{item.title}</h3>
                            <p className="testimonial-text">{item.text}</p>
                        </div>
                        <div className="testimonial-footer">
                            <div className="user-info">
                                <img src={item.avatar} alt={item.name} className="user-avatar" />
                                <div className="user-details">
                                    <span className="user-name">{item.name}</span>
                                    <span className="user-role">{item.role}</span>
                                </div>
                            </div>
                            <div className="footer-action">
                                <div className="action-circle">
                                    <ArrowUpRight className="arrow-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials