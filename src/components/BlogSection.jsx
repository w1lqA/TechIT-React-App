import React from "react";
import SectionTitle from "./SectionTitle";
import BlogCard from "./cards/BlogCard";
import BlogImage1 from "../assets/blog-post-1.png"
import BlogImage2 from "../assets/blog-post-2.png"
import BlogImage3 from "../assets/blog-post-3.png"

function BlogSection() {
  return (
    <section id="blog" className="bg-blue-700">
      <div>
      <SectionTitle sectionTitle={"Latest Blog Post"} sectionIcon={"book"}/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard blogImage={BlogImage1} blogTitle={'How to Secure Your Business Data in 2023'} blogDescription={"In this post, we'll share some tips and best practices for securing your business data in the new year."}/>
            <BlogCard blogImage={BlogImage2} blogTitle={'Top 10 Technology Trends for 2023'} blogDescription={"We've compiled a list of the top 10 technology trends to watch out for in the coming year."}/>
            <BlogCard blogImage={BlogImage3} adaptiveGridClass={'md:col-span-2 lg:col-span-1 col-span-1'} blogTitle={'The Importance of Cybersecurity in 2023'} blogDescription={"We'll discuss why cybersecurity is so important and how you can protect your business from these threats."}/>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BlogSection;