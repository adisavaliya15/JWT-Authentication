import React from "react";
import {
  TrophyIcon,
  CubeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: TrophyIcon,
    title: "Performance Metrics",
    description: "Optimized analytics performance.",
  },
  {
    icon: CubeIcon,
    title: "Data Integration",
    description: "Connect to multiple data sources.",
  },
  {
    icon: GlobeAltIcon,
    title: "Global Insights",
    description: "Analyze data from all markets.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-16 bg-white">
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Key Features
      </h2>
      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-gray-50 p-6 rounded-lg text-center"
          >
            <feature.icon className="h-12 w-12 text-primary-600 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
