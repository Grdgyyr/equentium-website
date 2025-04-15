"use client";

import { useState } from "react";

export const Features = () => {
  const [tab, setTab] = useState("1");

  return (
    <section
      className="relative text-white min-h-screen overflow-hidden flex items-center px-6"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 70% 30%, rgba(173, 110, 219, 0.3) 0%, transparent 60%),
          radial-gradient(circle at center, rgba(124, 58, 237, 0.2), transparent 70%),
          linear-gradient(to bottom right, #0B0B1F, #1B103D, #2D1268)
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Glow circle */}
      <div className="absolute w-[900px] h-[900px] bg-[radial-gradient(closest-side,#000_70%,#9560EB)] opacity-30 blur-3xl rounded-full top-[30%] left-1/2 -translate-x-1/2 z-0 border border-purple-600/30"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col-reverse lg:flex-row gap-16 items-center justify-between">
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="text-sm text-purple-400 font-medium">
            The security first platform
          </div>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Simplify your <span className="text-purple-300">security</span> with
            <br /> authentication services
          </h3>
          <p className="text-white/70 text-lg">
            Define access roles for the end-users, and extend your authorization
            capabilities to implement dynamic access control.
          </p>

          {/* Tab Buttons */}
          <div className="flex flex-col gap-2 mt-8 max-w-xs w-full">
            {[
              {
                id: "1",
                label: "Simplify your security",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" />
                  </svg>
                ),
              },
              {
                id: "2",
                label: "Customer identity",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z" />
                  </svg>
                ),
              },
              {
                id: "3",
                label: "Adaptable authentication",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z" />
                  </svg>
                ),
              },
            ].map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition border ${
                  tab === id
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white/70 border-white/30 hover:text-white hover:border-white"
                }`}
              >
                {icon}
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Visual Side */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          {/* Halo SVG effect */}
          <svg
            className="absolute w-[480px] h-[480px] pointer-events-none z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pulse-a" x1="50%" x2="50%" y1="100%" y2="0%">
                <stop offset="0%" stopColor="#A855F7"></stop>
                <stop offset="76.382%" stopColor="#FAF5FF"></stop>
                <stop offset="100%" stopColor="#6366F1"></stop>
              </linearGradient>
            </defs>
            <circle cx="240" cy="240" r="240" fill="url(#pulse-a)" />
          </svg>

          {/* Icon Container with glowy border */}
          <div className="relative z-10 w-[120px] h-[120px] flex items-center justify-center rounded-xl border border-white/30 backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition">
            {tab === "1" && (
              <svg
                className="w-10 h-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23 25"
              >
                <path
                  fill="currentColor"
                  fillRule="nonzero"
                  d="M10.55 15.91H.442L14.153.826 12.856 9.91h10.107L9.253 24.991l1.297-9.082Zm.702-8.919L4.963 13.91h7.893l-.703 4.918 6.289-6.918H10.55l.702-4.918Z"
                />
              </svg>
            )}
            {tab === "2" && (
              <svg
                className="w-10 h-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
              >
                <path
                  fill="currentColor"
                  d="M18 14h-2V8h2c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4v2H8V4c0-2.2-1.8-4-4-4S0 1.8 0 4s1.8 4 4 4h2v6H4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4v-2h6v2c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4ZM16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2h-2V4ZM2 4c0-1.1.9-2 2-2s2 .9 2 2v2H4c-1.1 0-2-.9-2-2Zm4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2h2v2ZM8 8h6v6H8V8Zm10 12c-1.1 0-2-.9-2-2v-2h2c1.1 0 2 .9 2 2s-.9 2-2 2Z"
                />
              </svg>
            )}
            {tab === "3" && (
              <svg
                className="w-10 h-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 14"
              >
                <path
                  fill="currentColor"
                  fillRule="nonzero"
                  d="m10 5.414-8 8L.586 12 10 2.586l6 6 8-8L25.414 2 16 11.414z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
