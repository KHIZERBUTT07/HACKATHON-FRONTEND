import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-6">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mb-12">
          <h1 className="text-5xl font-extrabold mb-6 text-gray-800 font-inter">
            WELCOME TO THE BENEFICIARY MANAGEMENT APP
          </h1>
          <p className="text-xl mb-10 font-serif text-gray-600 font-bold">
            Streamline your workflows with a system designed to manage
            beneficiaries, departments, and operations efficiently.
          </p>
          {/* Call-to-Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link
              to="/signup"
              className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300 text-center"
            >
              Register as Beneficiary
            </Link>
            <Link
              to="/login"
              className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300 text-center"
            >
              Login as Beneficiary
            </Link>
            <Link
              to="/admin-login"
              className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300 text-center"
            >
              Admin Login
            </Link>
            <Link
              to="/receptionist-dashboard"
              className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300 text-center"
            >
              Login as Receptionist
            </Link>
            <Link
              to="/department-dashboard"
              className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300 text-center"
            >
              Login as Department
            </Link>
            <Link
              to="/"
              className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300 text-center"
            >
              Stay on Home
            </Link>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="w-full max-w-5xl px-4">
          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="/saylani4.png"
                alt="Saylani Welfare 1"
                className="rounded-lg shadow-lg w-full h-[200px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/saylani2.png"
                alt="Saylani Welfare 2"
                className="rounded-lg shadow-lg w-full h-[200px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/saylani3.png"
                alt="Saylani Welfare 3"
                className="rounded-lg shadow-lg w-full h-[200px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/saylani1.png"
                alt="Saylani Welfare 4"
                className="rounded-lg shadow-lg w-full h-[200px] object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

     
      <Footer />
    </div>
  );
};

export default Home;
