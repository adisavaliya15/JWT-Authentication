import React from "react";

const HeroSection = () => (
  <section className="relative bg-white">
    <div className="pt-20 pb-32">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900">
          Unlock Insights with AnalyticsCo
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Data-driven decisions made easy. Visualize, analyze, and optimize your
          business.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#features"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            Get Started
          </a>
          <a
            href="https://www.youtube.com"
            className="px-6 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50"
          >
            Watch Demo
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
