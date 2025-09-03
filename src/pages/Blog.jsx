import React, { useState } from "react";

import bibleImg from "../images/bible.jpg";
import campaignPrayerImg from "../images/campaign-prayer.png";
import campaignMotherImg from "../images/campaign-mother.jpg";
import campaignHealthScreenImg from "../images/campaign-health-screen.jpg";
import campaignDonateImg from "../images/campaign-donate.png";
import schoolImg from "../images/school.jpg";
import praykImg from "../images/prayk.jpg";
import pray2Img from "../images/pray2.jpg";
import prayImg from "../images/pray.jpg";
import logoImg from "../images/logo.jpg";
import kidsImg from "../images/kids.jpg";
import helpImg from "../images/help.jpg";
import heartImg from "../images/heart.jpg";
import healthImg from "../images/health.jpg";
import handsupImg from "../images/handsup.jpg";
import handsImg from "../images/hands.jpg";
import grouphandsImg from "../images/grouphands.jpg";
import fistImg from "../images/fist.jpg";
import classImg from "../images/class.jpg";
import class1Img from "../images/class1.jpg";
import coinsImg from "../images/coins.jpg";
import donatePageImg from "../images/donate-page.jpg";
import donatePage1Img from "../images/donate-page1.jpg";
import patchImg from "../images/patch.PNG";
import patch2Img from "../images/patch2.PNG";

const blogImages = [
  bibleImg,
  campaignPrayerImg,
  campaignMotherImg,
  campaignHealthScreenImg,
  campaignDonateImg,
  schoolImg,
  praykImg,
  pray2Img,
  prayImg,
  logoImg,
  kidsImg,
  helpImg,
  heartImg,
  healthImg,
  handsupImg,
  handsImg,
  grouphandsImg,
  fistImg,
  classImg,
  class1Img,
  coinsImg,
  donatePageImg,
  donatePage1Img,
  patchImg,
  patch2Img,
];
import "../PageStyles.css";
import FooterSection from "../components/footer-section.jsx";

const Blog = ({ handleNavigate }) => {
  // All blog posts for all pages
  const allBlogPosts = [
    // Page 1
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
    // Page 2
    {
      id: 7,
      title: "Faith in Action: Stories of Hope and Healing",
      excerpt:
        "Real-life accounts of how faith-based giving has transformed communities and individuals.",
      date: "April 10, 2025",
      author: "Grace Lee",
      category: "Faith & Inspiration",
    },
    {
      id: 8,
      title: "Health Initiatives: Saving Lives Together",
      excerpt:
        "How your support is funding critical health projects in underserved regions.",
      date: "April 5, 2025",
      author: "Samuel Osei",
      category: "Health & Education",
    },
    {
      id: 9,
      title: "Education for All: Breaking Barriers",
      excerpt:
        "Meet the students whose lives have changed thanks to your generosity.",
      date: "March 30, 2025",
      author: "Linda Park",
      category: "Health & Education",
    },
    {
      id: 10,
      title: "Women Empowerment: Leading Change",
      excerpt:
        "Spotlight on women-led campaigns making a difference worldwide.",
      date: "March 25, 2025",
      author: "Fatima Hassan",
      category: "Campaign Spotlight",
    },
    {
      id: 11,
      title: "Sustainable Giving: Eco-Friendly Campaigns",
      excerpt:
        "How we’re supporting environmental causes for a greener future.",
      date: "March 20, 2025",
      author: "Carlos Diaz",
      category: "Industry Trends",
    },
    {
      id: 12,
      title: "Youth Volunteers: The Next Generation of Change",
      excerpt:
        "Young people are stepping up to lead and inspire in their communities.",
      date: "March 15, 2025",
      author: "Ava Patel",
      category: "Volunteering",
    },
    // Page 3
    {
      id: 13,
      title: "Disaster Relief: Rapid Response in Crisis",
      excerpt:
        "How your donations help us respond quickly to emergencies worldwide.",
      date: "March 10, 2025",
      author: "John Carter",
      category: "Impact Stories",
    },
    {
      id: 14,
      title: "Tech for Good: Digital Tools in Fundraising",
      excerpt:
        "Exploring the latest technology trends that are revolutionizing giving.",
      date: "March 5, 2025",
      author: "Priya Singh",
      category: "Industry Trends",
    },
    {
      id: 15,
      title: "Community Champions: Local Heroes",
      excerpt:
        "Celebrating individuals making a big impact in their neighborhoods.",
      date: "March 1, 2025",
      author: "James Okoro",
      category: "Campaign Spotlight",
    },
    {
      id: 16,
      title: "Fundraising Events: Bringing People Together",
      excerpt:
        "How events are helping to raise awareness and support for key causes.",
      date: "February 25, 2025",
      author: "Maria Gomez",
      category: "Fundraising Tips",
    },
    {
      id: 17,
      title: "Mental Health Matters: Support and Awareness",
      excerpt:
        "Our campaigns focused on mental health and community well-being.",
      date: "February 20, 2025",
      author: "Olivia Brown",
      category: "Health & Education",
    },
    {
      id: 18,
      title: "Alumni Giving: Staying Connected for Good",
      excerpt:
        "How alumni networks are driving positive change through giving.",
      date: "February 15, 2025",
      author: "William Lee",
      category: "Corporate Giving",
    },
  ];

  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const [selectedPost, setSelectedPost] = useState(null);
  // Attach images to posts for easy access
  const postsWithImages = allBlogPosts.map((post, idx) => ({
    ...post,
    image: blogImages[post.id % blogImages.length],
  }));
  const paginatedPosts = postsWithImages.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // --- Substack-style Footer Bar and Comment Panel hooks at top level ---
  // Article detail state (only used if selectedPost is not null)
  const articleKey = selectedPost
    ? `article-${selectedPost.id || selectedPost.title}`
    : "";
  // Like state
  const [likeCount, setLikeCount] = React.useState(0);
  const [liked, setLiked] = React.useState(false);
  // Comments state
  const [comments, setComments] = React.useState([]);
  // Per-comment like map
  const [commentLikeMap, setCommentLikeMap] = React.useState({});
  // Comment input fields
  const [commentName, setCommentName] = React.useState("");
  const [commentEmail, setCommentEmail] = React.useState("");
  const [commentText, setCommentText] = React.useState("");
  // Footer bar and comment panel visibility
  const [footerVisible, setFooterVisible] = React.useState(true);
  const [showCommentPanel, setShowCommentPanel] = React.useState(false);
  // Share menu
  const [shareMenuOpen, setShareMenuOpen] = React.useState(false);
  const [shareCopied, setShareCopied] = React.useState(false);

  // When selectedPost changes, load state from localStorage
  React.useEffect(() => {
    if (!selectedPost) return;
    const key = `article-${selectedPost.id || selectedPost.title}`;
    const savedLikeCount = localStorage.getItem(`${key}-likeCount`);
    setLikeCount(savedLikeCount ? parseInt(savedLikeCount, 10) : 0);
    const savedLiked = localStorage.getItem(`${key}-liked`);
    setLiked(savedLiked === "true");
    const savedComments = localStorage.getItem(`${key}-comments`);
    setComments(savedComments ? JSON.parse(savedComments) : []);
    const savedCommentLikeMap = localStorage.getItem(`${key}-commentLikeMap`);
    setCommentLikeMap(
      savedCommentLikeMap ? JSON.parse(savedCommentLikeMap) : {}
    );
    setCommentName("");
    setCommentEmail("");
    setCommentText("");
    setShowCommentPanel(false);
    setShareMenuOpen(false);
    setShareCopied(false);
  }, [selectedPost]);

  // Persist likes/comments to localStorage
  React.useEffect(() => {
    if (!selectedPost) return;
    localStorage.setItem(`${articleKey}-likeCount`, likeCount);
  }, [likeCount, articleKey, selectedPost]);
  React.useEffect(() => {
    if (!selectedPost) return;
    localStorage.setItem(`${articleKey}-liked`, liked);
  }, [liked, articleKey, selectedPost]);
  React.useEffect(() => {
    if (!selectedPost) return;
    localStorage.setItem(`${articleKey}-comments`, JSON.stringify(comments));
  }, [comments, articleKey, selectedPost]);
  React.useEffect(() => {
    if (!selectedPost) return;
    localStorage.setItem(
      `${articleKey}-commentLikeMap`,
      JSON.stringify(commentLikeMap)
    );
  }, [commentLikeMap, articleKey, selectedPost]);

  // Like handler
  const handleLike = () => {
    if (!selectedPost) return;
    if (!liked) {
      setLikeCount(likeCount + 1);
      setLiked(true);
    } else {
      setLikeCount(likeCount - 1 >= 0 ? likeCount - 1 : 0);
      setLiked(false);
    }
  };
  // Comment like handler
  const handleCommentLike = (idx) => {
    setCommentLikeMap((prev) => {
      const newMap = { ...prev };
      newMap[idx] = !newMap[idx];
      return newMap;
    });
  };
  
  // Share handler
  const handleShare = () => {
    setShareMenuOpen((open) => !open);
  };
  // Copy link handler
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 1500);
  };
  // Format date
  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleString(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  if (selectedPost) {
    return (
      <div className="article-page-container">
        <div className="article-sections-wrapper">
          <button
            className="back-to-blog-btn"
            onClick={() => setSelectedPost(null)}
            aria-label="Close article and return to blog"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ verticalAlign: "middle" }}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <section className="article-section article-section-hero">
            <div className="article-text">
              <p>
                <span>{selectedPost.excerpt}</span> Here you can add more
                detailed content, images, and formatting as needed for each
                article. You can expand this section to include the full story,
                interviews, statistics, and more.
              </p>
              <br />
              <p>
                This is the full article for <b>{selectedPost.title}</b>. Here
                you can add more detailed content, images, and formatting as
                needed for each article. You can expand this section to include
                the full story, interviews, statistics, and more.
              </p>
              <br />
              <p>
                This is the full article for <b>{selectedPost.title}</b>. Here
                you can add more detailed content, images, and formatting as
                needed for each article. You can expand this section to include
                the full story, interviews, statistics, and more.
              </p>
              <br />
              <p>
                This is the full article for <b>{selectedPost.title}</b>. Here
                you can add more detailed content, images, and formatting as
                needed for each article. You can expand this section to include
                the full story, interviews, statistics, and more.
              </p>
            </div>
            <div className="article-image-content">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                style={{
                  width: "100%",
                  maxHeight: 250,
                  objectFit: "cover",
                  padding: "10px",
                }}
              />
              <h1 className="article-title">{selectedPost.title}</h1>
              <div className="post-meta">
                <span className="post-author">By {selectedPost.author}</span>
                <span className="post-category">{selectedPost.category}</span>
              </div>
            </div>
          </section>
        </div>
        {/* Footer Bar */}
        <div
          className={`footer-bar custom-footer-bar${
            footerVisible ? "" : " footer-bar-hidden"
          }`}
          role="region"
          aria-label="Article actions bar"
        >
          <button
            className={`btn footer-action custom-footer-action${
              liked ? " liked" : ""
            }`}
            aria-pressed={liked}
            onClick={handleLike}
            title={liked ? "Unlike" : "Like"}
          >
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 17.503 15.625"
            >
              <path
                id="Fill"
                d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z"
                transform="translate(0 0)"
              />
            </svg>
            <span className="footer-count">{likeCount}</span>
          </button>

          <div className="footer-action-share-wrapper">
            <button
              className="footer-action custom-footer-action"
              onClick={handleShare}
              aria-haspopup="menu"
              aria-expanded={shareMenuOpen}
              title="Share"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="footer-icon"
              >
                <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            </button>
            {shareMenuOpen && (
              <div className="share-menu custom-share-menu" role="menu">
                {/* Copy Link */}
                <button
                  onClick={handleCopyLink}
                  role="menuitem"
                  className="share-menu-item"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M5 15v-2a2 2 0 0 1 2-2h2"></path>
                    <path d="M15 5h2a2 2 0 0 1 2 2v2"></path>
                  </svg>
                  Copy link
                </button>
                {/* Embed */}
                <button
                  role="menuitem"
                  className="share-menu-item"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setShareCopied(true);
                    setTimeout(() => setShareCopied(false), 1500);
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  Embed
                </button>
                {/* Notes */}
                <button
                  role="menuitem"
                  className="share-menu-item"
                  onClick={() => {
                    window.open(
                      "https://keep.google.com/",
                      "_blank",
                      "noopener"
                    );
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10"></path>
                    <rect
                      x="3"
                      y="13"
                      width="18"
                      height="8"
                      rx="2"
                      ry="2"
                    ></rect>
                  </svg>
                  Notes
                </button>
                {/* Facebook */}
                <button
                  role="menuitem"
                  className="share-menu-item"
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
                      "_blank",
                      "noopener"
                    );
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                  </svg>
                  Facebook
                </button>
                {/* LinkedIn */}
                <button
                  role="menuitem"
                  className="share-menu-item"
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    window.open(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
                      "_blank",
                      "noopener"
                    );
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                  </svg>
                  LinkedIn
                </button>
                {/* WhatsApp */}
                <button
                  role="menuitem"
                  className="share-menu-item"
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    window.open(
                      `https://wa.me/?text=${url}`,
                      "_blank",
                      "noopener"
                    );
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M16.001 3.2c-7.067 0-12.8 5.733-12.8 12.8 0 2.262.601 4.463 1.733 6.4l-1.801 6.601 6.8-1.8c1.867 1.067 4.001 1.733 6.068 1.733 7.067 0 12.8-5.733 12.8-12.8s-5.733-12.8-12.8-12.8zM16.001 27.2c-1.801 0-3.601-.467-5.2-1.334l-.373-.2-4.04 1.067 1.08-3.973-.24-.387c-1.067-1.733-1.627-3.733-1.627-5.8 0-6.067 4.933-11 11-11s11 4.933 11 11-4.933 11-11 11z" />
                    <path d="M23.201 19.601c-.334-.167-1.974-.974-2.28-1.087-.307-.114-.534-.167-.76.167-.227.334-.867 1.087-1.067 1.314-.2.227-.387.254-.72.087-.334-.167-1.414-.521-2.694-1.661-1-.893-1.68-1.993-1.88-2.327-.2-.334-.021-.513.146-.68.15-.15.334-.387.5-.58.167-.194.223-.334.334-.56.111-.227.056-.427-.028-.594-.084-.167-.76-1.834-1.04-2.507-.273-.656-.552-.567-.76-.577-.194-.008-.417-.01-.64-.01-.223 0-.58.083-.88.417-.3.334-1.16 1.134-1.16 2.767 0 1.633 1.187 3.213 1.353 3.44.167.227 2.34 3.573 5.68 4.867.794.273 1.413.436 1.897.558.797.2 1.523.172 2.093.104.639-.075 1.974-.807 2.253-1.587.28-.78.28-1.447.194-1.587-.084-.14-.307-.227-.64-.394z" />
                  </svg>
                  WhatsApp
                </button>
                {/* X (Twitter) */}
                <button
                  role="menuitem"
                  className="share-menu-item"
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    window.open(
                      `https://x.com/intent/tweet?url=${url}`,
                      "_blank",
                      "noopener"
                    );
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.162 0h-4.326l-5.836 8.228-5.836-8.228h-4.326l8.228 11.616-8.228 11.616h4.326l5.836-8.228 5.836 8.228h4.326l-8.228-11.616z" />
                  </svg>
                  X
                </button>
                {shareCopied && <span className="share-copied">Copied!</span>}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Blog</h1>
        <p className="page-description">
          Stay updated with our latest news, stories, and fundraising tips.
        </p>

        <div className="featured-post">
          <div className="featured-image">
            <img
              src={blogImages[0]}
              alt="Featured Blog"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
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
            <button
              className="read-more-btn"
              onClick={() =>
                setSelectedPost({
                  id: "featured",
                  title:
                    "Transforming Lives Through Education: A Year in Review",
                  date: "May 20, 2025",
                  author: "Amanda Rodriguez",
                  category: "Featured",
                  excerpt:
                    "Take a look at the incredible impact our education-focused campaigns have made over the past year, reaching over 10,000 children worldwide.",
                  image: blogImages[0],
                })
              }
            >
              Read Full Article
            </button>
          </div>
        </div>

        <div className="blog-grid">
          {paginatedPosts
            .slice(0, paginatedPosts.length - 2)
            .map((post, idx) => (
              <div className="blog-card" key={post.id}>
                <div className="post-image">
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="post-content">
                  <span className="post-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <span className="post-author">By {post.author}</span>
                  </div>
                  <button
                    className="read-more-btn"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read More 
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="pagination">
          <button
            className="page-btn"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            ← Back
          </button>
          <button
            className={`page-btn${currentPage === 1 ? " active" : ""}`}
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            1
          </button>
          <button
            className={`page-btn${currentPage === 2 ? " active" : ""}`}
            onClick={() => setCurrentPage(2)}
            disabled={currentPage === 2}
          >
            2
          </button>
          <button
            className={`page-btn${currentPage === 3 ? " active" : ""}`}
            onClick={() => setCurrentPage(3)}
            disabled={currentPage === 3}
          >
            3
          </button>
          <button
            className="page-btn"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            Next →
          </button>
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
