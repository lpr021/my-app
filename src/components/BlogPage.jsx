import React from 'react';
import './BlogPage.css';

const blogPosts = [
  {
    title: 'Top Real Estate Market Trends in 2025',
    category: 'Market Trends',
    description: 'Stay ahead with the latest real estate investment and pricing trends across India’s top cities...',
    image: 'https://via.placeholder.com/400x200?text=Market+Trends',
    link: '#',
  },
  {
    title: 'Is 2025 the Best Year to Invest in Property?',
    category: 'Investment',
    description: 'Experts predict high returns on early investments. Here’s what you need to know...',
    image: 'https://via.placeholder.com/400x200?text=Investment',
    link: '#',
  },
  {
    title: 'Buying a Home in Vijayawada: What You Should Know',
    category: 'Residential',
    description: 'Local hotspots, loan tips, and what makes Vijayawada a buyer\'s market in 2025...',
    image: 'https://via.placeholder.com/400x200?text=Residential',
    link: '#',
  },
  {
    title: 'Legal Checklist Before Buying Land in Andhra Pradesh',
    category: 'Legal',
    description: 'Avoid legal trouble with this quick guide for verifying land ownership and clear titles...',
    image: 'https://via.placeholder.com/400x200?text=Legal',
    link: '#',
  },
];

function BlogPage() {
  return (
    <div className="blog-page">
      <h2 className="blog-heading">📚 Real Estate Insights & <span className="highlight">SEO Blogs</span></h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <p className="blog-category">{post.category.toUpperCase()}</p>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-desc">{post.description}</p>
            <a href={post.link} className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
