"use client";

import React, { useState } from "react";

export const Pricing = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Jessie J",
      role: "Ltd Head of Product",
      quote:
        "As a busy professional, I don't have a lot of time to devote to working out. But with this fitness program, I have seen amazing results in just a few short weeks.",
      svg: (
        <svg
          className="w-20 h-20 rounded-full"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="50" fill="#6C3EF6" />
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontSize="35px"
            fontFamily="Arial"
          >
            J
          </text>
        </svg>
      ),
    },
    {
      name: "Mark Luk",
      role: "Spark Founder & CEO",
      quote:
        "This program helped me stay consistent even with a hectic travel schedule. I feel stronger and more energized than ever before.",
      svg: (
        <svg
          className="w-20 h-20 rounded-full"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="50" fill="#A278FA" />
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontSize="35px"
            fontFamily="Arial"
          >
            M
          </text>
        </svg>
      ),
    },
    {
      name: "Jeff Kahl",
      role: "Appy Product Lead",
      quote:
        "The user experience and workouts are so well designed, I genuinely look forward to my daily sessions. Highly recommend!",
      svg: (
        <svg
          className="w-20 h-20 rounded-full"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="50" fill="#FF7AC0" />
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontSize="35px"
            fontFamily="Arial"
          >
            K
          </text>
        </svg>
      ),
    },
  ];

  const active = testimonials[activeIndex];

  return (
    <div className="min-h-screen bg-[#0A0E27] text-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* --- Pricing Section --- */}
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-2">
          Flexible plans and features
        </h2>
        <p className="text-center text-gray-400 mb-10 sm:mb-12 max-w-xl mx-auto text-sm">
          All the lorem ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet.
        </p>

        <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-6 flex-wrap">
          <span>Monthly</span>
          <div className="bg-[#6C3EF6] rounded-full px-1 py-1 flex items-center cursor-pointer">
            <div className="bg-white text-[#6C3EF6] px-3 py-0.5 rounded-full font-medium text-sm">
              Yearly <span className="text-green-400">(-20%)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="text-sm text-gray-300 space-y-6 border-r border-white/20 pr-6">
            <div className="border-b border-white/10 pb-4">
              <p className="text-white font-semibold mb-2">Usage</p>
              <ul className="space-y-2">
                <li>Social Connections</li>
                <li>Custom Domains</li>
                <li>User Role Management</li>
                <li>External Databases</li>
              </ul>
            </div>
            <div className="border-b border-white/10 pb-4">
              <p className="text-white font-semibold mb-2">Features</p>
              <ul className="space-y-2">
                <li>Custom Connection</li>
                <li>Advanced Deployment Options</li>
                <li>Extra Add-ons</li>
                <li>Admin Roles</li>
                <li>Deploy and Monitor</li>
                <li>Enterprise Add-ons</li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold mb-2">Support</p>
              <ul className="space-y-2">
                <li>Premium Support</li>
              </ul>
            </div>
          </div>

          {[
            {
              title: "Pro",
              price: "$24",
              features: ["100", "4", "Unlimited", "1", "✓", "✓", "✓"],
              style: "bg-[#11152D]",
              button: "bg-white text-[#6C3EF6] hover:bg-purple-100",
            },
            {
              title: "Team",
              price: "$49",
              features: [
                "250",
                "Unlimited",
                "Unlimited",
                "5",
                "✓",
                "✓",
                "✓",
                "✓",
                "✓",
              ],
              style:
                "bg-gradient-to-b from-[#6C3EF6] to-[#1A1E42] border border-[#A278FA]",
              button: "bg-[#A678FA] text-white hover:bg-[#8a58f4]",
            },
            {
              title: "Enterprise",
              price: "$79",
              features: [
                "Unlimited",
                "Unlimited",
                "Unlimited",
                "Unlimited",
                "✓",
                "✓",
                "✓",
                "✓",
                "✓",
                "✓",
                "✓",
              ],
              style: "bg-[#11152D]",
              button: "bg-white text-[#6C3EF6] hover:bg-purple-100",
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`${plan.style} p-6 rounded-2xl shadow-md flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-[#A278FA] font-medium text-sm mb-1">
                  {plan.title}
                </h3>
                <div className="text-white text-3xl font-bold">
                  {plan.price}
                  <span className="text-gray-400 text-sm font-normal">/mo</span>
                </div>
                <p className="text-gray-400 text-sm mt-1 mb-4">
                  Everything at your fingertips.
                </p>
                <button
                  className={`w-full ${plan.button} py-2 rounded-full font-semibold text-sm transition`}
                >
                  Get Started →
                </button>

                <ul className="text-sm mt-6 space-y-2 text-gray-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#A278FA]">✓</span>{" "}
                      {feature.includes("✓") ? "" : feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* --- Testimonial Section (Below Pricing) --- */}
        <div className="text-center text-white px-4 py-12">
          <div className="flex justify-center mb-6">{active.svg}</div>
          <p className="text-xl font-semibold mb-4 max-w-2xl mx-auto">
            {active.quote}
          </p>
          <div className="flex justify-center gap-4 flex-wrap mt-6">
            {testimonials.map((person, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 rounded-full border ${
                  activeIndex === index
                    ? "bg-white text-[#6C3EF6]"
                    : "bg-transparent text-gray-300 border-gray-500"
                } text-sm font-medium transition`}
              >
                {person.name} - {person.role}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
