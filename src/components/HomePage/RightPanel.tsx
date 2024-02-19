import Link from "next/link";

type Category = {
  slug: string;
  title: string;
};

const CategoryLink: React.FC<Category> = ({ slug, title }) => (
  <li className="my-2 mx-auto">
    <Link href={`/Blogs/${slug}`} className="text-blue-400 hover:text-blue-600">{title}
    </Link>
  </li>
);

const CategoriesTab: React.FC = () => {
  const blogCategories: Category[] = [{ slug: "/Developer", title: "Developer Blogs" }];

  return (
    <div className="py-1 px-10 md:p-10 text-center my-5 md:mr-20 md:my-20">
      <h2 className="text-lg font-semibold mb-4">My Blogs</h2>
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
