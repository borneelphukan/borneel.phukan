import { ReactNode } from "react";
import Image from "next/image";

type Props = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
};

const BlogBanner = ({
  children,
  title = "Blogs",
  subtitle = "Thoughts, tutorials & insights",
}: Props) => {
  return (
    <div className="relative min-h-[300px] sm:min-h-[320px] md:h-[44vh] w-full overflow-hidden flex items-center justify-center p-4">
      {/* Background image */}
      <Image
        src={"https://pub-0a2eeceea05f4b00bc0da29be0d52d0d.r2.dev/banners/blog-banner.jpg"}
        alt="Blog Banner"
        fill
        priority
        unoptimized={true}
        className="absolute inset-0 object-cover"
      />

      {/* Solid dark base overlay + multi-layer gradient overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/25 via-transparent to-purple-900/25 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl w-full">
        {/* Decorative accent line */}
        <div className="w-10 h-[3px] rounded-full bg-blue-400 mb-4 sm:mb-6" />

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2 sm:mb-3 drop-shadow-sm">
          {title}
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light mb-4 sm:mb-6 max-w-md">
          {subtitle}
        </p>

        {/* Breadcrumbs */}
        <div className="mt-1 max-w-full overflow-hidden">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
