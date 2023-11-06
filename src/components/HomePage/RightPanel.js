import Link from "next/link";

const CategoryLink = ({ slug, title }) => (
  <li className="my-2 mx-auto">
    <Link className="text-blue-400 hover:text-blue-600" href={`/Blogs/${slug}`}>
      {title}
    </Link>
  </li>
);

const CategoriesTab = () => {
  const blogCategories = [
    { slug: "scamindustry/ScamIndustry", title: "Consultancy - Scam Industry" },
    { slug: "travelblogs/TravelBlogs", title: "Travel Blogs" },
    { slug: "techdigest/TechDigest", title: "Tech Digest" },
    { slug: "mystory/mystory", title: "Story of My Life" },
  ];

  return (
    <div className="py-1 px-10 md:p-10 my-5 md:mr-20 md:my-20 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Blog Categories</h2>
      <ul>
        {blogCategories.map((category) => (
          <CategoryLink
            key={category.slug}
            slug={category.slug}
            title={category.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default CategoriesTab;
