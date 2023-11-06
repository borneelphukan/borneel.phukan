import React from "react";

const ServiceBanner = () => {
  return (
    <div className="service-cover">
      <div className="container mx-auto px-10">
        {/*Banner Goes Here*/}
        <div className=" py-10 md:py-10 lg:py-10 xl:py-10 text-black">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="my-5 md:my-10 md:text-5xl lg:text-5xl xl:text-5xl font-semibold text-3xl mb-4 text-white">
              Services
              <span className="text-6xl font-bold text-blue-400"></span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 w-[50%] text-center mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              cursus turpis ac risus convallis rhoncus. Duis nec egestas justo,
              ac ultrices lectus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
