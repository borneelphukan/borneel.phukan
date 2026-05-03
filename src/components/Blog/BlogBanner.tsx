import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const BlogBanner = ({ children }: Props) => {
  return (
    <div 
      className="bg-cover bg-center h-[40vh] w-full"
      style={{ backgroundImage: "url('https://pub-0a2eeceea05f4b00bc0da29be0d52d0d.r2.dev/banners/blog-banner.jpg')" }}
    >
      <div className="container mx-auto px-10">
        {/*Banner Goes Here*/}
        <div className="py-10 md:py-10 lg:py-10 xl:py-10">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h1 className="justify-center mt-5 md:mt-10 md:ml-20 md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-2xl mb-4">
              Blogs
            </h1>
            <div className="flex items-center justify-center">
              <p className="md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-2xl">
                <main>{children}</main>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
