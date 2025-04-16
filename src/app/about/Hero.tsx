"use client";

import Image from "next/image";
import logoImage from "@/assets/images/logo1.png";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const count = 45;
    const tempParticles = Array.from({ length: count }, (_, i) => {
      const size = Math.random() * 4 + 2;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const duration = Math.random() * 10 + 5;
      const delay = Math.random() * 5;

      return (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-20"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            animation: `float ${duration}s ease-in-out ${delay}s infinite`,
          }}
        />
      );
    });

    setParticles(tempParticles);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0a0a23] to-[#1b1035] text-white overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {particles}
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-start text-center px-4 pt-32 md:pt-40">
        <div className="max-w-4xl w-full">
          <p className="text-sm sm:text-base md:text-lg font-medium text-purple-300 mb-4">
            <span className="text-purple-500">The folks</span> behind the product
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-gray-100 leading-tight">
            Turning <span className="text-white">security</span> into innovation
          </h1>
        </div>

        {/* Ring + Logo Group */}
        <div className="relative mt-12 w-60 sm:w-80 md:w-[400px] h-60 sm:h-80 md:h-[400px] flex items-center justify-center">
          <Image
            src="https://preview.cruip.com/stellar/images/about-illustration.svg"
            alt="Glow Illustration"
            fill
            className="object-contain pointer-events-none z-0"
            style={{
              maskImage: "linear-gradient(to bottom, white 60%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, white 60%, transparent 100%)",
            }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-6 z-10">
            <Image
              src={logoImage}
              alt="Logo"
              width={64}
              height={64}
              className="rounded-full shadow-lg sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
          </div>
        </div>
      </div>

      {/* Inline Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.7;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
};
