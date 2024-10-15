import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import Breadcrumbs from "./Breadcrumbs";

type TPageBannerProps = {
  PageName: string;
  bannerBg?: string;
};

const PageBanner = ({
  PageName,
  bannerBg = "bg-page-banner-bg",
}: TPageBannerProps) => {
  return (
    <section
      className={`space-y-6 ${bannerBg} bg-cover bg-center bg-no-repeat py-[70px] text-center text-white`}
    >
      <FadeInUpWithSlowBounce className="space-y-4">
        <h1 className="text-3xl font-semibold lg:text-4xl">{PageName}</h1>
        <Breadcrumbs />
      </FadeInUpWithSlowBounce>
    </section>
  );
};

export default PageBanner;
