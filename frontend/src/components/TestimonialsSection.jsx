import React from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CEO, Acme Inc.",
    quote: "AnalyticsCo transformed our business.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Bob Smith",
    role: "CTO, Beta Corp.",
    quote: "Incredible real-time insights.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 bg-gray-50">
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
      <div className="mt-12 space-y-8">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">“{t.quote}”</p>
            <footer className="mt-4 flex items-center justify-center">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-10 w-10 rounded-full"
              />
              <div className="ml-4 text-left">
                <p className="text-gray-800 font-semibold">{t.name}</p>
                <p className="text-gray-600 text-sm">{t.role}</p>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
