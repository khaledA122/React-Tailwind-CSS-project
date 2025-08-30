import React from "react";
import { FaCircle } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";

const ServicesSection = () => {
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives",
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto py-6 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center">
        {/* left side */}
        <div>
          <h1 className="text-gray-900 text-4xl font-bold pb-3">
            Future of support with <br /> new shape
          </h1>
          <p className="text-gray-600 py-2">
            Discuss your goals, determine success metrics, <br /> identify problems
          </p>
          <span className="flex gap-2 items-center text-gray-600 mb-2 mt-2">
            <FaCircle className="text-blue-600" /> UX design content strategy
          </span>
          <span className="flex gap-2 items-center text-gray-600">
            <FaCircle className="text-blue-600" /> Development bring
          </span>
          <button className="py-2 mt-6 px-4 md:px-6 bg-blue-700 rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 text-white">
            <a href="">Get Started</a>
          </button>
        </div>

        {/* right side */}
        <div className="grid md:grid-cols-2 gap-6 max-w-xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 rounded-xl shadow hover:shadow-lg transition bg-white"
            >
              <div className="mb-2">{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-gray-600 py-2">{service.description}</p>
              <a
                href={service.link}
                className="text-blue-500 font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
