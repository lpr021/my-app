import React from 'react';
import './BlogSection.css';

const blogPosts = [
  {
    title: "5 Tips for First-Time Home Buyers",
    date: "July 10, 2025",
    link: "#"
  },
  {
    title: "Investing in Real Estate During 2025",
    date: "July 5, 2025",
    link: "#"
  },
  {
    title: "Upcoming Hot Locations in India",
    date: "July 1, 2025",
    link: "#"
  },
  {
    title: "How to Lease Property Without Hassles",
    date: "June 27, 2025",
    link: "#"
  },
  {
    title: "Guide to Legal Documentation in Property",
    date: "June 20, 2025",
    link: "#"
  },
  {
    title: "Top Mistakes to Avoid While Buying",
    date: "June 12, 2025",
    link: "#"
  }
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2 className="blog-heading">📝 Latest Blog Posts</h2>
      <p className="blog-subheading">Stay updated with real estate trends, guides, and expert tips.</p>
      <div className="blog-cards-container">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <a href={post.link} className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
