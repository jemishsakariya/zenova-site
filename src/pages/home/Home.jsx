import React from 'react';
import { ArrowRight, ArrowUpRight, Palette, Smartphone, Code2, Megaphone } from 'lucide-react';
import '../../styles/pages/home.scss';
import Testimonials from '../../components/testimonials/Testimonials';
import OurWorks from '../../components/works/OurWorks';

const Home = () => {
  const tickerItems = [
    "GAME DEVELOPMENT",
    "WEBSITE DESIGN",
    "WEBSITE DEVELOPMENT",
    "MOBILE APP DEVELOPMENT",
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-grid">
          {/* Left Card */}
          <div className="hero-card left-card">
            <div className="card-content">
              <h1 className="hero-title">
                <div className="title-row">
                  <span>DIGITAL SOLUTIONS</span>
                  <div className="cta-button">
                    <div className="icon-circle">
                      <ArrowRight className="arrow-icon" />
                    </div>
                    <span className="cta-text">START A PROJECT</span>
                  </div>
                </div>
                <span className="highlight-text">THAT DRIVE SUCCESS</span>
              </h1>
              <p className="hero-description">
                At Zenova, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.
              </p>
            </div>
            <div className="ticker-wrapper">
              <div className="ticker">
                {[...tickerItems, ...tickerItems].map((item, index) => (
                  <React.Fragment key={index}>
                    <span className="ticker-item">{item}</span>
                    <span className="ticker-dot">•</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="hero-card right-card">
            <div className="image-container">
              <div className="icon">
                <div className="ring"></div>
                <div className="overlay-icon">
                  <ArrowUpRight className="arrow-icon" />
                </div>
              </div>
              <img
                src="https://img.freepik.com/free-photo/3d-dice-outdoors_23-2151110348.jpg?t=st=1771066946~exp=1771070546~hmac=8c18e0e4b28f8bbd60d887f04684543109e495ad8191c3e1d9285c1fc2e6480b&w=2000"
                alt="Project Preview"
                className="project-image"
              />
            </div>
            <div className="project-info">
              <h3 className="project-name">Ludo</h3>
              <p className="project-category">Game Development</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="stats-container">
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
          <div className="stat-box">
            <span className="stat-label">Years of Experience</span>
            <h2 className="stat-value">10+</h2>
          </div>
          <div className="stat-box know-more-box">
            <div className="know-more-content">
              <div className="icon-circle">
                <ArrowUpRight className="arrow-icon" />
              </div>
              <span className="know-more-text">KNOW MORE</span>
            </div>
          </div>
        </div>
      </section>

      <section className='reason-to-choose-section'>
        <div className="section-header-card">
          <h2 className="section-title">REASONS TO CHOOSE ZENOVA FOR YOUR DIGITAL JOURNEY</h2>
        </div>
        <div className="reasons-grid">
          {[
            {
              title: "EXPERTISE IN CUTTING-EDGE TECHNOLOGIES",
              desc: "Zenova ensures your projects are powered by state-of-the-art technologies, guaranteeing performance and future-readiness."
            },
            {
              title: "PROVEN TRACK RECORD OF SUCCESS",
              desc: "Zenova demonstrates a consistent ability to meet and exceed client expectations, providing reliable and impactful results."
            },
            {
              title: "CLIENT-CENTRIC APPROACH",
              desc: "At Zenova, we prioritize understanding our clients' unique requirements, fostering long-term partnerships built on trust."
            },
            {
              title: "DEDICATED TEAM OF PROFESSIONALS",
              desc: "Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable digital products."
            }
          ].map((reason, index) => (
            <div className="reason-card" key={index}>
              <div className="reason-content">
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-desc">{reason.desc}</p>
              </div>
              <div className="learn-more">
                <div className="icon-circle">
                  <ArrowUpRight className="arrow-icon" />
                </div>
                <span>Learn More</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='our-services-section'>
        <div className="section-header-card">
          <h2 className="section-title">OUR SERVICES</h2>
        </div>
        <div className="services-grid">
          {[
            {
              title: "WEB DESIGN",
              desc: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression.",
              price: "$1,500",
              icon: <Palette className="service-icon-svg" />
            },
            {
              title: "MOBILE APP DEVELOPMENT",
              desc: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications.",
              price: "$2,500",
              icon: <Smartphone className="service-icon-svg" />
            },
            {
              title: "WEB DEVELOPMENT",
              desc: "Our Web Development service is focused on turning your website into a powerful digital asset using latest technologies.",
              price: "$1,800",
              icon: <Code2 className="service-icon-svg" />
            },
            {
              title: "DIGITAL MARKETING",
              desc: "In the digital age, marketing is a critical aspect of your business success. We employ data-driven strategies.",
              price: "$1,200",
              icon: <Megaphone className="service-icon-svg" />
            }
          ].map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-header">
                <div className="title-group">
                  <div className="icon-box">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <div className="book-call-btn">
                  <div className="icon-circle">
                    <ArrowUpRight className="arrow-icon" />
                  </div>
                  <span>BOOK A CALL</span>
                </div>
              </div>
              <p className="service-desc">{service.desc}</p>
              <div className="service-footer">
                <span className="price-tag">STARTS FROM {service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <OurWorks />

      <Testimonials />
    </div>
  );
};

export default Home;