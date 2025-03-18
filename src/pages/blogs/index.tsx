import BlogBanner from "@/components/Blog/BlogBanner";
import DefaultLayout from "@/layout/DefaultLayout";
import BreadCrumbs from "@/components/common/BreadCrumb";
import BlogCategoryCard from "@/components/card/BlogCategoryCard";

const Blogs = () => {
  const categories = [
    {
      slug: "tech",
      title: "Tech Blogs",
      description:
        "Discover the latest trends in technology, from AI breakthroughs to software development best practices. Explore in-depth tutorials, industry insights, and cutting-edge innovations that are shaping the future of tech.",
      count: 3,
    },
    {
      slug: "career",
      title: "Career Talks",
      description:
        "Navigate your professional journey with expert advice on career growth, workplace strategies, and personal development. Learn how to advance your career, build valuable skills, and achieve your professional goals.",
      count: 1,
    },
    
  ];
  return (
    <DefaultLayout>
      <BlogBanner>
        <BreadCrumbs />
      </BlogBanner>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {categories.map((category) => (
          <BlogCategoryCard
            key={category.slug}
            description={category.description}
            slug={category.slug}
            title={category.title}
            count={category.count}
          />
        ))}
      </div>
    </DefaultLayout>
  );
};

export default Blogs;
