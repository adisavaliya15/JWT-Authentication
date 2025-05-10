import React from "react";
import { ChartBarIcon, CogIcon, BellIcon } from "@heroicons/react/24/outline";

const services = [
  {
    title: "Real-Time Monitoring",
    description: "Track live data streams and metrics.",
    icon: ChartBarIcon,
  },
  {
    title: "Custom Dashboards",
    description: "Build dashboards tailored to your needs.",
    icon: CogIcon,
  },
  {
    title: "Alerts & Notifications",
    description: "Be notified when critical thresholds are met.",
    icon: BellIcon,
  },
];

const ServicesSection = () => (
  <section id="services" className="py-16 bg-gray-50">
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Our Services
      </h2>
      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white p-6 rounded-lg shadow text-center"
          >
            <service.icon className="h-12 w-12 text-primary-600 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
