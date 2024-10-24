import PageBanner from "@/components/common/PageBanner";
import CommentsSection from "@/components/pages/blogs/blog_details/CommentsSection";
import Content from "@/components/pages/blogs/blog_details/Content";
import Sidebar from "@/components/pages/blogs/blog_details/Sidebar";
import { formatCountryRoute } from "@/lib/utils";

type PageProps = {
  params: { blogSlug: string };
};

export async function generateMetadata({ params }: PageProps) {
  const { blogSlug } = params;

  return {
    title: `Root Education | ${formatCountryRoute(blogSlug)}`,
  };
}

const BlogDetailsPage = ({ params }: PageProps) => {
  const { blogSlug } = params;

  return (
    <main>
      <PageBanner PageName={formatCountryRoute(blogSlug)} />
      <section className="pb-[50px] pt-[100px]">
        <div className="container flex flex-col gap-x-8 lg:flex-row">
          <Content />
          <Sidebar />
        </div>
      </section>

      <CommentsSection />
    </main>
  );
};

export default BlogDetailsPage;
