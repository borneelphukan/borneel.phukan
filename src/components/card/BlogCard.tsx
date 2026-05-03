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
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1"
    >
      {/* Image container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5 md:p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-4 text-sm">
          <span className="inline-flex items-center gap-1.5 text-gray-500 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
            {author}
          </span>
          <span className="text-gray-300">·</span>
          <time className="text-gray-400 font-normal">{date}</time>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-[0.938rem] leading-relaxed line-clamp-3 mb-5 flex-grow">
          {description}
        </p>

        {/* CTA */}
        <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
          <span className="group-hover:mr-2 transition-all duration-300">Read Article</span>
          <svg
            className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
