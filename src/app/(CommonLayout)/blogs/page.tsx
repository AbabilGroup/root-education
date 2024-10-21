import PageBanner from "@/components/common/PageBanner";
import Blogs from "@/components/pages/blogs/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Education | Blogs & Newses",
};

const BlogsPage = () => {
  return (
    <main>
      <PageBanner PageName="Blogs" />
      <Blogs />
    </main>
  );
};

export default BlogsPage;
