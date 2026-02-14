import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import '../../styles/pages/blogs.scss';

const Blogs = () => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('ALL');

    const blogPosts = [
        {
            id: 1,
            title: "WEB DESIGN TRENDS SHAPING 2024",
            desc: "Stay ahead of the design curve with insights into the latest web design trends. From immersive user experiences to bold color choices, explore the design elements that will dominate the digital landscape in 2023 and beyond.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
            category: "Design",
            readTime: "6 Mins",
            author: "Laura Turner"
        },
        {
            id: 2,
            title: "OPTIMIZING MOBILE USER EXPERIENCE FOR HIGHER CONVERSIONS",
            desc: "Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices, from navigation to performance optimization.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070",
            category: "Development",
            readTime: "8 Mins",
            author: "Mark Evans"
        },
        {
            id: 3,
            title: "MASTERING THE ART OF MINIMALISTIC DESIGN",
            desc: "Simplicity and elegance take center stage in minimalistic design. Learn the principles of minimalism, how to effectively communicate with fewer elements, and why less is often more.",
            image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=1924",
            category: "Design",
            readTime: "5 Mins",
            author: "Jane Smith"
        },
        {
            id: 4,
            title: "THE PSYCHOLOGY OF VISUAL DESIGN IN BRANDING",
            desc: "Uncover the impact of visual elements in branding and how they influence customer perceptions and emotions. Explore color psychology, typography choices, and visual storytelling.",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
            category: "Design",
            readTime: "7 Mins",
            author: "Chris Miller"
        }
    ];

    const filters = ['ALL', 'BUSINESS', 'DESIGN', 'DEVELOPMENT'];

    return (
        <div className="blogs-page">
            <div className="blogs-header-card">
                <h1>OUR BLOGS</h1>
                <div className="filter-buttons">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="blogs-grid">
                {blogPosts
                    .filter(post => activeFilter === 'ALL' || post.category.toUpperCase() === activeFilter)
                    .map((post, index) => (
                        <div
                            className="blog-card"
                            key={index}
                            onClick={() => navigate(`/blogs/${post.id}`)}
                        >
                            <div className="image-container">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="blog-info">
                                <div className="blog-meta">
                                    <span className="meta-item">Category • <strong>{post.category}</strong></span>
                                    <span className="meta-item">Read Time • <strong>{post.readTime}</strong></span>
                                    <span className="meta-item">Author • <strong>{post.author}</strong></span>
                                </div>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-desc">{post.desc}</p>
                            </div>
                            <div className="read-more-btn">
                                <div className="icon-circle">
                                    <ArrowUpRight className="arrow-icon" />
                                </div>
                                <span>READ FULL BLOG</span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Blogs;