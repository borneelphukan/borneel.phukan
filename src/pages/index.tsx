import DefaultLayout from "@/layout/DefaultLayout";
import Button from "@/components/buttons/Button";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

type CategoryProps = {
  slug: string;
  title: string;
};

const categories: CategoryProps[] = [
  { slug: "tech", title: "Tech Blogs" },
  //{ slug: "travel", title: "Travel Blogs" },
  { slug: "career", title: "Career Talks" },
];

const Category = ({ slug, title }: CategoryProps) => (
  <li className="my-2 mx-auto">
    <Link href={`/blogs/${slug}`} className="text-blue-400 hover:text-blue-600">
      {title}
    </Link>
  </li>
);

const Home = () => {
  const { t } = useTranslation();
  const role: string[] = t("role", {
    returnObjects: true,
  }) as string[];

  const aboutme: string[] = t("aboutme", {
    returnObjects: true,
  }) as string[];

  return (
    <DefaultLayout>
      <div className="home-cover">
        <div className="container mx-auto px-10">
          {/*Banner Goes Here*/}
          <div className="py-16 md:py-24 lg:py-32 xl:py-48 text-black">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-base md:text-xl lg:text-xl xl:text-xl font-semibold mb-2 text-white uppercase">
                {role[0]}{" "}
                <span className="text-base md:text-xl lg:text-xl xl:text-2xl font-semibold mb-2 text-blue-400 uppercase">
                  Borneel Bikash Phukan
                </span>
              </h1>
              <h1 className="md:text-4xl lg:text-4xl xl:text-4xl font-semibold text-4xl mb-2 text-white">
                {role[1]}{" "}
                <span className="text-4xl font-bold text-blue-400">&</span>
              </h1>
              <h1 className="md:text-4xl lg:text-4xl xl:text-4xl font-semibold text-4xl mb-4 text-white cursor-blink">
                {role[2]}
              </h1>
              <p className="text-md md:text-lg lg:text-xl text-gray-300 max-w-[60%]">
                {t("introduction")}
              </p>
              <Button
                bgColor="black"
                textColor="white"
                text="Download CV"
                file={"docs/CV.pdf"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row lg:flex-row ">
        <div className="my-8 md:w-4/5 lg:w-4/5">
          <div className="p-4 md:p-10 mx-4 md:mx-10 md:mb-10">
            <h1 className="text-4xl md:text-4xl mb-4 md:mb-10 text-center">
              {aboutme[0]}
            </h1>

            <p className="text-base md:text-base text-justify">{aboutme[1]}</p>

            <div className="flex flex-col md:flex-row items-center pt-4 md:pt-10">
              <div className="h-60 w-60 mx-auto rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={"/assets/borneel.png"}
                  width={200}
                  height={200}
                  alt="Your Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:pl-20 flex-1">
                <p className="font-bold text-lg md:text-xl">{aboutme[2]}</p>
                <p className="text-base md:text-base text-justify">
                  {aboutme[3]}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 mx-auto md:w-1/5 lg:w-1/5 md:ml-5 lg:ml-5 ">
          <div className="py-1 px-10 md:p-10 text-center my-5 md:mr-20 md:my-20">
            <h2 className="text-lg font-semibold mb-4">{t("panelHeader")}</h2>
            <ul>
              {categories.map((category) => (
                <Category
                  key={category.slug}
                  slug={category.slug}
                  title={category.title}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
