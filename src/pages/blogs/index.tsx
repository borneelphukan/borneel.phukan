import BlogBanner from "@/components/Blog/BlogBanner";
import DefaultLayout from "@/layout/DefaultLayout";
import Category from "@/components/Home/RightPanel";
import BreadCrumbs from "@/components/common/BreadCrumb";

const Blogs = () => {
  return (
    <DefaultLayout>
      <BlogBanner>
        <BreadCrumbs />
      </BlogBanner>
      <Category />
    </DefaultLayout>
  );
};

export default Blogs;
