import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Facebook, Twitter, Linkedin, Heart, Share2 } from 'lucide-react';
import '../../styles/pages/blog-detail.scss';

const BlogDetail = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const blogPosts = [
        {
            id: 1,
            title: "WEB DESIGN TRENDS",
            highlight: "SHAPING 2024",
            author: "Laura Turner",
            date: "12TH JANUARY 2024",
            category: "DESIGN",
            readTime: "6 Minutes",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
            content: "Stay ahead of the design curve with insights into the latest web design trends. From immersive user experiences to bold color choices, explore the design elements that will dominate the digital landscape in 2023 and beyond."
        },
        {
            id: 2,
            title: "OPTIMIZING MOBILE",
            highlight: "USER EXPERIENCE",
            author: "Mark Evans",
            date: "15TH NOVEMBER 2023",
            category: "DEVELOPMENT",
            readTime: "8 Minutes",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070",
            content: "Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices, from navigation to performance optimization."
        },
        {
            id: 3,
            title: "MASTERING THE ART",
            highlight: "OF MINIMALISTIC DESIGN",
            author: "SOPHIA ROBERTS",
            date: "25TH OCTOBER 2023",
            category: "DESIGN",
            readTime: "5 MINUTES",
            image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=1924",
            content: "Simplicity and elegance take center stage in minimalistic design. Learn the principles of minimalism, how to effectively communicate with fewer elements, and why less is often more."
        },
        {
            id: 4,
            title: "THE PSYCHOLOGY OF",
            highlight: "VISUAL DESIGN",
            author: "Chris Miller",
            date: "5TH SEPTEMBER 2023",
            category: "DESIGN",
            readTime: "7 Minutes",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
            content: "Uncover the impact of visual elements in branding and how they influence customer perceptions and emotions. Explore color psychology, typography choices, and visual storytelling."
        }
    ];

    const post = blogPosts.find(p => p.id === parseInt(id)) || blogPosts[2];

    return (
        <div className="blog-detail-page">
            <div className="blog-detail-hero">
                <div className="hero-left-card">
                    <h1>
                        <div className="title-row">
                            <span>{post.title}</span>
                            <div className="cta-button">
                                <div className="icon-circle">
                                    <ArrowRight size={24} className="arrow-icon" />
                                </div>
                                <span className="cta-text">START A PROJECT</span>
                            </div>
                        </div>
                        <br />
                        <span className="highlight-text">{post.highlight}</span>
                    </h1>
                </div>

                <div className="meta-sidebar">
                    <div className="meta-card">
                        <span className="label">AUTHOR</span>
                        <span className="value">{post.author}</span>
                    </div>
                    <div className="meta-card">
                        <span className="label">Published Date</span>
                        <span className="value">{post.date}</span>
                    </div>
                    <div className="meta-card">
                        <span className="label">Category</span>
                        <span className="value">{post.category}</span>
                    </div>
                    <div className="meta-card">
                        <span className="label">Read Time</span>
                        <span className="value">{post.readTime}</span>
                    </div>
                </div>
            </div>

            <div className="image-container">
                <img src={post.image} alt={post.title} className="blog-main-image" />
            </div>

            <div className="blog-content-layout">
                <aside className="social-sidebar">
                    <div className="social-box">
                        <Twitter />
                    </div>
                    <div className="social-box">
                        <Linkedin />
                    </div>
                    <div className="social-box">
                        <Facebook />
                    </div>
                </aside>

                <main className="content-main">
                    <section>
                        <h2>THE ESSENCE OF MINIMALISM IN DESIGN</h2>
                        <p>
                            In the realm of design, the essence of minimalism lies in the deliberate choice to distill complexity and convey a powerful message through simplicity. It's an art form that celebrates the beauty of space, emphasizing the significance of each carefully chosen element. A minimalist design isn't about deprivation; rather, it's a conscious decision to focus on the core, allowing the audience to engage with a visual narrative that is both refined and impactful.
                        </p>
                        <p>
                            As we explore the essence of minimalistic design, we uncover the subtle nuances that contribute to its allure. The use of negative space, a hallmark of minimalism, creates breathing room within the composition, allowing the viewer's gaze to rest and appreciate the inherent beauty of the design. The simplicity in form and color becomes a canvas for expression, where every line and shade tells a story. By embracing minimalism, designers have the opportunity to communicate more with less, fostering a connection that transcends visual aesthetics.
                        </p>
                        <p>
                            At its core, minimalism in design challenges conventional notions, encouraging a shift from excess to essence. It invites both creators and consumers to engage in a thoughtful dialogue with the visual elements, promoting a sense of mindfulness and intentionality. The essence of minimalistic design, therefore, lies not just in its visual appeal but in the profound impact it has on the way we perceive and interact with the world of design.
                        </p>
                    </section>

                    <section>
                        <h2>MINIMALISM BEYOND AESTHETICS</h2>
                        <p>
                            Beyond its visually captivating exterior, minimalism is a design philosophy that permeates every aspect of the creative process, extending its influence far beyond the surface. This philosophy becomes a lens through which designers view their craft, shaping not just what is seen but how it is experienced. The minimalist approach transcends mere aesthetics; it becomes a mindset that emphasizes clarity, functionality, and a deeper connection with the audience.
                        </p>
                        <p>
                            Minimalism, as a philosophy, challenges the notion that complexity is synonymous with sophistication. It prompts designers to question the necessity of each element, encouraging a meticulous evaluation of form and function. This shift in perspective extends to the user experience, where the removal of unnecessary clutter allows for a seamless and intuitive interaction. Beyond creating visually pleasing designs, the minimalist philosophy becomes a guiding force for designing experiences that are inherently user-centric.
                        </p>
                    </section>

                    <section>
                        <h2>PRACTICAL TIPS FOR MASTERING MINIMALISTIC DESIGN</h2>
                        <p>
                            The journey to mastering minimalistic design involves a practical exploration of principles and techniques that breathe life into the philosophy. It begins with an understanding of the psychology of color in minimalism, where the strategic use of a limited color palette contributes to the overall impact of the design. The intentional choice of typography plays a pivotal role, guiding the viewer through the visual narrative with clarity and purpose.
                        </p>
                        <p>
                            Navigating the terrain of minimalistic design also involves a keen awareness of the power of negative space. Far from being empty, this space becomes a deliberate pause, allowing the audience to absorb and appreciate the essential elements of the composition. Striking the right balance between simplicity and sophistication is an art in itself, requiring a discerning eye and a commitment to the core principles of minimalism.
                        </p>
                        <p>
                            Practical tips extend beyond the theoretical, delving into the day-to-day decisions that shape a minimalist design. From the selection of imagery to the judicious use of graphic elements, each choice contributes to the overall impact. Mastery in minimalistic design is not merely about adherence to a set of rules; it's about developing an intuition that guides the creative process, ensuring that every design decision serves a purpose and contributes to the cohesive whole.
                        </p>
                    </section>
                </main>

                <aside className="author-sidebar">
                    <div className="author-card">
                        <div className="author-header">
                            <img src="https://i.pravatar.cc/150?u=wade" alt="Wade Warren" className="author-img" />
                            <div className="author-info">
                                <span className="name">Wade Warren</span>
                                <span className="role">Art Director</span>
                            </div>
                        </div>
                        <p className="author-bio">
                            Crafting visual narratives that captivate and inspire, weaving creativity into every chapter of the design journey.
                        </p>
                        <a href="#" className="twitter-handle">
                            <div className="left-side">
                                <Twitter size={16} /> @wadewarren
                            </div>
                            <ArrowRight size={14} className="arrow-right-icon" />
                        </a>
                    </div>

                    <div className="stat-sidebar-card">
                        <div className="icon-box">
                            <Heart size={18} fill="currentColor" />
                        </div>
                        <div className="stat-info">
                            <span className="label">LIKED BY</span>
                            <span className="value">2.6K <span>USERS</span></span>
                        </div>
                    </div>

                    <div className="stat-sidebar-card">
                        <div className="icon-box">
                            <Share2 size={18} />
                        </div>
                        <div className="stat-info">
                            <span className="label">SHARED BY</span>
                            <span className="value">120 <span>USERS</span></span>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default BlogDetail;
