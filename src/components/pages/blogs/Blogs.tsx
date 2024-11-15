import Section from "@/components/common/Section";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <Section
      sectionName="Our Latest Blogs"
      title="Your Best Guide to Studying Abroad"
    >
      <div className="container grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </Section>
  );
};

export default Blogs;
