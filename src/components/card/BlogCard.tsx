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
    <div className="container mx-auto my-8 max-w-screen-lg">
      <a href={link}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md shadow-md relative">
          <div className="col-span-1 md:col-span-1 items-center justify-center overflow-hidden mx-auto">
            <Image
              src={imageUrl}
              alt="Blog Image"
              width={450}
              height={450}
              className="rounded-t-md hover:scale-125 transition-all duration-500 cursor-pointer w-full h-full object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-1 m-10">
            <div className="flex flex-col h-full">
              <div className="justify-center">
                <p className="text-gray-500">{author}</p>
              </div>
              <h1 className="text-2xl font-bold my-2 justify-center">
                {title}
              </h1>
              <p className="text-sm font-semibold mb-2">{date}</p>
              <p className="justify-center">
                <div className="inline-flex items-center text-sm font-normal">
                  {description}
                </div>
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogCard;
