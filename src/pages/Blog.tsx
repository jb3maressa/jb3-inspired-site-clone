
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogHeader from '../components/BlogHeader';
import BlogGrid from '../components/BlogGrid';
import BlogCta from '../components/BlogCta';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BlogHeader />
      <BlogGrid />
      <BlogCta />
      <Footer />
    </div>
  );
};

export default Blog;
