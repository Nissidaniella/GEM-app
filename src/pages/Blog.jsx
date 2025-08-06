import React from "react";
import "../PageStyles.css";
import FooterSection from "../components/footer-section.jsx";

const Blog = ({ handleNavigate }) => {
  const blogPosts = [
    {
      id: 1,
      title: "How Your Donations Make a Difference",
      excerpt:
        "Learn about the impact of your contributions and how they change lives around the world.",
      date: "May 15, 2025",
      author: "Jane Smith",
      category: "Impact Stories",
    },
    {
      id: 2,
      title: "Creating a Successful Fundraising Campaign",
      excerpt:
        "Tips and strategies for creating an effective campaign that resonates with donors.",
      date: "May 10, 2025",
      author: "Michael Johnson",
      category: "Fundraising Tips",
    },
    {
      id: 3,
      title: "Spotlight: Clean Water Initiative in Africa",
      excerpt:
        "A closer look at how our featured campaign is providing clean water to communities in need.",
      date: "May 3, 2025",
      author: "Sarah Williams",
      category: "Campaign Spotlight",
    },
    {
      id: 4,
      title: "The Future of Charitable Giving",
      excerpt:
        "Exploring trends and innovations that will shape philanthropy in the coming years.",
      date: "April 28, 2025",
      author: "David Chen",
      category: "Industry Trends",
    },
    {
      id: 5,
      title: "Volunteer Opportunities: Making an Impact Beyond Donations",
      excerpt:
        "Discover how you can contribute your time and skills to causes you care about.",
      date: "April 22, 2025",
      author: "Emily Taylor",
      category: "Volunteering",
    },
    {
      id: 6,
      title: "Corporate Social Responsibility and Charitable Partnerships",
      excerpt:
        "How businesses are partnering with charities to create meaningful social impact.",
      date: "April 15, 2025",
      author: "Robert Johnson",
      category: "Corporate Giving",
    },
  ];

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Blog</h1>
        <p className="page-description">
          Stay updated with our latest news, stories, and fundraising tips.
        </p>

        <div className="blog-filter-bar">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search articles..."
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>
          <div className="category-filter">
            <select className="category-select">
              <option>All Categories</option>
              <option>Impact Stories</option>
              <option>Fundraising Tips</option>
              <option>Campaign Spotlights</option>
              <option>Industry Trends</option>
              <option>Volunteering</option>
            </select>
          </div>
        </div>

        <div className="featured-post">
          <div className="featured-image placeholder-img"></div>
          <div className="featured-content">
            <span className="post-category">Featured</span>
            <h2>Transforming Lives Through Education: A Year in Review</h2>
            <p className="post-excerpt">
              Take a look at the incredible impact our education-focused
              campaigns have made over the past year, reaching over 10,000
              children worldwide.
            </p>
            <div className="post-meta">
              <span className="post-date">May 20, 2025</span>
              <span className="post-author">By Amanda Rodriguez</span>
            </div>
            <button className="read-more-btn">Read Full Article</button>
          </div>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="post-image placeholder-img"></div>
              <div className="post-content">
                <span className="post-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                  <span className="post-author">By {post.author}</span>
                </div>
                <button className="read-more-link">Read More →</button>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">Next →</button>
        </div>

        <div className="newsletter-signup">
          <h3>Subscribe to Our Newsletter</h3>
          <p>
            Get the latest updates and stories delivered directly to your inbox.
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="email-input"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
