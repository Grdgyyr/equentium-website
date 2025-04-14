import React from "react";

export const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#0A0E27] text-white py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-2">Flexible plans and features</h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto text-sm">
          All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary,
          making this the first true generator on the Internet.
        </p>

        <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-6">
          <span>Monthly</span>
          <div className="bg-[#6C3EF6] rounded-full px-1 py-1 flex items-center cursor-pointer">
            <div className="bg-white text-[#6C3EF6] px-3 py-0.5 rounded-full font-medium text-sm">
              Yearly <span className="text-green-400">(-20%)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {/* Features List */}
          <div className="text-sm text-gray-300 space-y-6">
            <div>
              <p className="text-white font-semibold mb-2">Usage</p>
              <ul className="space-y-2">
                <li>Social Connections</li>
                <li>Custom Domains</li>
                <li>User Role Management</li>
                <li>External Databases</li>
              </ul>
            </div>
            <div>
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

          {/* Pricing Cards */}
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
              features: ["250", "Unlimited", "Unlimited", "5", "✓", "✓", "✓", "✓", "✓"],
              style: "bg-gradient-to-b from-[#6C3EF6] to-[#1A1E42] border border-[#A278FA]",
              button: "bg-[#A678FA] text-white hover:bg-[#8a58f4]",
            },
            {
              title: "Enterprise",
              price: "$79",
              features: ["Unlimited", "Unlimited", "Unlimited", "Unlimited", "✓", "✓", "✓", "✓", "✓", "✓", "✓"],
              style: "bg-[#11152D]",
              button: "bg-white text-[#6C3EF6] hover:bg-purple-100",
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`${plan.style} p-6 rounded-2xl shadow-md flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-[#A278FA] font-medium text-sm mb-1">{plan.title}</h3>
                <div className="text-white text-3xl font-bold">
                  {plan.price}<span className="text-gray-400 text-sm font-normal">/mo</span>
                </div>
                <p className="text-gray-400 text-sm mt-1 mb-4">Everything at your fingertips.</p>
                <button
                  className={`w-full ${plan.button} py-2 rounded-full font-semibold text-sm transition`}
                >
                  Get Started →
                </button>

                <ul className="text-sm mt-6 space-y-2 text-gray-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#A278FA]">✓</span> {feature.includes("✓") ? "" : feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
