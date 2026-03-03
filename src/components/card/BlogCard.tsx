import Image from "next/image";

type Props = {
  imageUrl: string;
  author: string;
  date: string;
  title: string;
  description: string;
  link: string;
};

const BlogCard = ({
  imageUrl,
  author,
  date,
  title,
  description,
  link,
}: Props) => {
  return (
    <a 
      href={link} 
      className="flex flex-col w-full h-full group p-4 md:p-6 hover:-translate-y-2 transition-transform duration-500 cursor-pointer"
    >
      {/* Image container */}
      <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 mb-6 shadow-md group-hover:shadow-2xl transition-shadow duration-500">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Meta tags (Author & Date) */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-md text-sm font-semibold tracking-wide">
          {author}
        </span>
        <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-md text-sm font-semibold tracking-wide">
          {date}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-[1.75rem] font-bold text-[#202020] leading-snug mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#6b7280] text-base md:text-[1.1rem] leading-relaxed line-clamp-3">
        {description}
      </p>
    </a>
  );
};

export default BlogCard;
