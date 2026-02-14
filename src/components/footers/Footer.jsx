import "../../styles/components/footer.scss";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import Faq from "../faq/faq";

const Footer = () => {
    return (
        <>
            <Faq />
            <div className="footer-container">
                <div className="get-in-touch">
                    <div className="footer-content">
                        <div className="title">Ready to Transform Your Digital Presence?</div>
                        <div className="description">Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions <br /> that drive growth for your business.</div>
                    </div>
                    <div className="footer-button">
                        <button className="primary-button">Get In Touch
                            <svg className="arrow" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 5.73695e-07L18.375 0C18.6071 0 18.8296 0.0921872 18.9937 0.256282C19.1578 0.420376 19.25 0.642936 19.25 0.875V14C19.25 14.4832 18.8582 14.875 18.375 14.875C17.8918 14.875 17.5 14.4832 17.5 14V2.98744L1.49372 18.9937C1.15201 19.3354 0.59799 19.3354 0.256282 18.9937C-0.0854272 18.652 -0.0854272 18.098 0.256282 17.7563L16.2626 1.75L5.25 1.75C4.76675 1.75 4.375 1.35825 4.375 0.875C4.375 0.391751 4.76675 5.73695e-07 5.25 5.73695e-07Z" fill="#B2CCE4" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="bootom-section">
                    <div className="left">
                        <div className="card">
                            <div className="top">
                                <div className="icon"><Instagram /></div>
                                <div className="card-arrow">
                                    <svg className="arrow" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 5.73695e-07L18.375 0C18.6071 0 18.8296 0.0921872 18.9937 0.256282C19.1578 0.420376 19.25 0.642936 19.25 0.875V14C19.25 14.4832 18.8582 14.875 18.375 14.875C17.8918 14.875 17.5 14.4832 17.5 14V2.98744L1.49372 18.9937C1.15201 19.3354 0.59799 19.3354 0.256282 18.9937C-0.0854272 18.652 -0.0854272 18.098 0.256282 17.7563L16.2626 1.75L5.25 1.75C4.76675 1.75 4.375 1.35825 4.375 0.875C4.375 0.391751 4.76675 5.73695e-07 5.25 5.73695e-07Z" fill="#B2CCE4" />
                                    </svg>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="title">instagram</div>
                                <div className="description">Share visually appealing snippets of our latest web projects.</div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="top">
                                <div className="icon"><Twitter /></div>
                                <div className="card-arrow">
                                    <svg className="arrow" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 5.73695e-07L18.375 0C18.6071 0 18.8296 0.0921872 18.9937 0.256282C19.1578 0.420376 19.25 0.642936 19.25 0.875V14C19.25 14.4832 18.8582 14.875 18.375 14.875C17.8918 14.875 17.5 14.4832 17.5 14V2.98744L1.49372 18.9937C1.15201 19.3354 0.59799 19.3354 0.256282 18.9937C-0.0854272 18.652 -0.0854272 18.098 0.256282 17.7563L16.2626 1.75L5.25 1.75C4.76675 1.75 4.375 1.35825 4.375 0.875C4.375 0.391751 4.76675 5.73695e-07 5.25 5.73695e-07Z" fill="#B2CCE4" />
                                    </svg>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="title">twitter</div>
                                <div className="description">Tweet about interesting coding challenges you've overcome.</div>
                            </div>
                        </div>



                        <div className="card">
                            <div className="top">
                                <div className="icon"><Linkedin /> </div>
                                <div className="card-arrow">
                                    <svg className="arrow" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 5.73695e-07L18.375 0C18.6071 0 18.8296 0.0921872 18.9937 0.256282C19.1578 0.420376 19.25 0.642936 19.25 0.875V14C19.25 14.4832 18.8582 14.875 18.375 14.875C17.8918 14.875 17.5 14.4832 17.5 14V2.98744L1.49372 18.9937C1.15201 19.3354 0.59799 19.3354 0.256282 18.9937C-0.0854272 18.652 -0.0854272 18.098 0.256282 17.7563L16.2626 1.75L5.25 1.75C4.76675 1.75 4.375 1.35825 4.375 0.875C4.375 0.391751 4.76675 5.73695e-07 5.25 5.73695e-07Z" fill="#B2CCE4" />
                                    </svg>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="title">linkedin</div>
                                <div className="description">Connect with us and stay updated with our latest insights.</div>
                            </div>
                        </div>



                        <div className="card">
                            <div className="top">
                                <div className="icon"><Github /></div>
                                <div className="card-arrow">
                                    <svg className="arrow" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 5.73695e-07L18.375 0C18.6071 0 18.8296 0.0921872 18.9937 0.256282C19.1578 0.420376 19.25 0.642936 19.25 0.875V14C19.25 14.4832 18.8582 14.875 18.375 14.875C17.8918 14.875 17.5 14.4832 17.5 14V2.98744L1.49372 18.9937C1.15201 19.3354 0.59799 19.3354 0.256282 18.9937C-0.0854272 18.652 -0.0854272 18.098 0.256282 17.7563L16.2626 1.75L5.25 1.75C4.76675 1.75 4.375 1.35825 4.375 0.875C4.375 0.391751 4.76675 5.73695e-07 5.25 5.73695e-07Z" fill="#B2CCE4" />
                                    </svg>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="title">github</div>
                                <div className="description">Share visually appealing snippets of our latest web projects.</div>
                            </div>
                        </div>



                    </div>
                    <div className="right">
                        <div className="link-section">
                            <div className="section">
                                <div className="title">Home</div>
                                <div className="links">
                                    <a href="#">Why Us</a>
                                    <a href="#">About</a>
                                    <a href="#">Testimonials</a>
                                    <a href="#">Contact Us</a>
                                </div>
                            </div>

                            <div className="section">
                                <div className="title">Services</div>
                                <div className="links">
                                    <a href="#">Web Development</a>
                                    <a href="#">Mobile Development</a>
                                    <a href="#">UI/UX Design</a>
                                    <a href="#">Digital Marketing</a>
                                </div>
                            </div>

                            <div className="section">
                                <div className="title">Projects</div>
                                <div className="links">
                                    <a href="#">Idea Linking Blog Webapp</a>
                                    <a href="#">Tour Management</a>
                                </div>
                            </div>

                            <div className="section">
                                <div className="title">Blogs</div>
                                <div className="links">
                                    <a href="#">Business</a>
                                    <a href="#">Technology</a>
                                </div>
                            </div>
                        </div>

                        <div className="bottom-section">
                            <div className="copyright">
                                <p>© {new Date().getFullYear()} Zenova. All rights reserved.</p>
                            </div>
                            <div className="links">
                                <a href="#">Terms & Conditions</a>
                                <a href="#">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer