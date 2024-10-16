import PageBanner from "@/components/common/PageBanner";
import Blogs from "@/components/pages/blogs/Blogs";

const BlogsPage = () => {
  return (
    <main>
      <PageBanner PageName="Blogs" />
      <Blogs />
    </main>
  );
};

export default BlogsPage;
