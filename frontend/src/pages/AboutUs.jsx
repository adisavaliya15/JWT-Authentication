import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="max-w-[1240px] mx-auto px-4 py-8 text-gray-800">
          <h1 className="text-4xl font-bold text-center text-[#00df9a] mb-6">
            About Us
          </h1>
          <p className="text-lg leading-8">
            Welcome to our platform! We are a team of passionate individuals
            dedicated to providing the best services and experiences to our
            customers. Our mission is to create value and make a positive impact
            through innovation, creativity, and excellence.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="shadow-lg p-6 rounded-lg bg-white">
              <h2 className="text-2xl font-bold text-[#00df9a]">Our Mission</h2>
              <p className="mt-4">
                To empower people and organizations by delivering innovative
                solutions that drive success and growth.
              </p>
            </div>
            <div className="shadow-lg p-6 rounded-lg bg-white">
              <h2 className="text-2xl font-bold text-[#00df9a]">Our Vision</h2>
              <p className="mt-4">
                To be a global leader in our industry, recognized for our
                commitment to quality, integrity, and sustainability.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default AboutUs;
