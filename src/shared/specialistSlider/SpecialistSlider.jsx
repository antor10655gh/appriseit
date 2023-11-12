import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import member1 from "../../assets/images/specialist/member1.jpg";
import member2 from "../../assets/images/specialist/member2.jpg";
import member3 from "../../assets/images/specialist/member3.jpg";
import member4 from "../../assets/images/specialist/member4.jpg";
import shapeBg from "../../assets/images/svgs/member-shape.svg";
import "./SpecialistSlider.css";
import { Link } from "react-router-dom";

const SpecialistSlider = () => {
  const specialists = [
    {
      name: "Dr. Rahim",
      designation: "Urology",
      img: member1,
    },
    {
      name: "Dr. Jerin",
      designation: "Cardiology",
      img: member2,
    },
    {
      name: "Dr. Karim",
      designation: "Orthopedics",
      img: member3,
    },
    {
      name: "Dr. Sriti",
      designation: "Neurology",
      img: member4,
    },
  ];

  const styleDiv = {
    backgroundImage: `url(${shapeBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {specialists.map((specialist) => (
          <SwiperSlide>
            <div>
              <div class="img-hover-zoom relative group cursor-pointer rounded-md">
                <img src={specialist.img} alt="Specialist" className="w-full" />
                <div
                  className="absolute flex justify-center items-center -bottom-16 lg:-bottom-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1/3 p-5 hidden group-hover:block transition duration-300"
                  style={styleDiv}
                >
                  <h3 className="text-white text-3xl font-bold mt-2">
                    {specialist.name}
                  </h3>
                  <p className="text-sm text-[#fff] mb-3">
                    {specialist.designation}
                  </p>
                  <Link to="/appointment" className="hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SpecialistSlider;
