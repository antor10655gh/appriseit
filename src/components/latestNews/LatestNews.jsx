import React from "react";
import newsImg1 from "../../assets/images/news/blog1.jpg";
import newsImg2 from "../../assets/images/news/blog2.jpg";
import newsImg3 from "../../assets/images/news/blog3.jpg";
import SectionHeader from "../../shared/sectionHeader/SectionHeader";
import { Link } from "react-router-dom";
import useDataLoad from "../../utils/useDataLoad";

const LatestNews = () => {
  //   If we want we can use this code and make it dynamic
  //   const apiUrl = "http://localhost:5000/api/v1/latest_news";
  //   const { data, loading, error } = useDataLoad(
  //     apiUrl,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     },
  //     [apiUrl]
  //   );
  const newses = [
    {
      id: 1,
      img: newsImg1,
      date: "Aug 21, 2020",
      postedBy: "Mr. Jamal",
      title: "Working in emergency medicine",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 2,
      img: newsImg2,
      date: "Aug 21, 2020",
      postedBy: "Mr. Jamal",
      title: "Individual treatment & assistance",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 3,
      img: newsImg3,
      date: "Aug 21, 2020",
      postedBy: "Mr. Jamal",
      title: "Child’s first hospital visit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  return (
    <div className="px-8 lg:px-0 py-6 lg:py-12">
      <div className="max-w-screen-xl mx-auto">
        <SectionHeader
          title="Our Latest News"
          desc="We are leading healthcare provider."
        />
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {newses.map((news) => (
              <div key={news.id}>
                <div class="img-hover-zoom relative group cursor-pointer rounded-md">
                  <img src={news.img} alt="Specialist" className="w-full" />
                  <div className="absolute flex justify-center items-center -bottom-16 lg:-bottom-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1/3 p-5 hidden group-hover:block transition duration-300"></div>
                </div>
                <div>
                  <h2 className="text-lgfont-bold mt-2">{news.title}</h2>
                  <div className="flex items-center gap-3 py-2">
                    <p className="text-sm text-gray-400">{news.date}</p>
                    <div className="w-[2px] h-4 bg-gray-500"></div>
                    <p className="text-sm text-gray-400">
                      Posted By: {news.postedBy}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{news.desc}</p>
                  <Link>
                    <button className="bg-[#17c3b2] text-white px-4 py-2 rounded hover:opacity-80 transition duration-300">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
