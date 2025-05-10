import React from "react";

const plans = [
  {
    name: "Basic",
    price: "$19/mo",
    features: ["Real-time data", "Standard support", "Basic dashboards"],
  },
  {
    name: "Pro",
    price: "$49/mo",
    features: ["All Basic features", "Custom dashboards", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    features: ["All Pro features", "Dedicated account", "Custom integrations"],
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-16 bg-white">
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800">Pricing Plans</h2>
      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
            <p className="mt-4 text-3xl font-bold text-gray-800">
              {plan.price}
            </p>
            <ul className="mt-6 space-y-2 text-gray-600">
              {plan.features.map((feat) => (
                <li key={feat}>• {feat}</li>
              ))}
            </ul>
            <a
              href="/register"
              className="mt-6 inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
