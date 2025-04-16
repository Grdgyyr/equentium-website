"use client";
import Image from "next/image";
import { useEffect } from "react";
import teamImg from "@/assets/images/team.jpg";

export const Story = () => {
  useEffect(() => {
    const handleScroll = () => {
      const image = document.getElementById("scroll-image");
      const wrapper = document.getElementById("scroll-wrapper");

      if (image && wrapper) {
        const rect = wrapper.getBoundingClientRect();
        const offset = Math.min(Math.max(-rect.top * 0.3, -40), 40);
        image.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Blurred Shape SVG */}
      <div
        className="absolute top-0 right-0 transform -translate-y-1/2 pointer-events-none opacity-50"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            fill="url(#bs4-a)"
            fillRule="evenodd"
            d="m0 0 461 369-284 58z"
            transform="matrix(1 0 0 -1 0 427)"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-12" id="scroll-wrapper">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white leading-snug">
            Our story (so far)
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image */}
          <figure className="w-full max-w-[420px] shrink-0 mx-auto lg:mx-0">
            <Image
              id="scroll-image"
              src={teamImg}
              alt="Team"
              width={420}
              height={280}
              className="rounded-lg shadow-lg transition-transform duration-700 ease-in-out"
            />
          </figure>

          {/* Text */}
          <div className="text-white/80 space-y-5 text-base leading-relaxed">
            <p>
              We came together over a shared excitement about building a product that could solve
              our own problem of where our next favourite hack is coming from. But also a product
              that helps everyone thrive in this market: from founders and engineers to companies
              and investors.
            </p>
            <p>
              Stellar is a product that connects people around the topics and ideas that fascinate
              them. <strong className="text-white font-semibold">
                The idea that we can use technology to take our experience
              </strong>, as security lovers, to a new dimension and leave the computer industry in
              better shape while we're at it.
            </p>
            <p>
              You can dive into the atoms that make up a product, share the moments that move you
              and discuss the ideas you find compelling. We want to create a ground for{" "}
              <strong className="text-white font-semibold">
                discussion and bring knowledge together
              </strong>, while making it more accessible and easier to grasp.
            </p>
            <p>
              Contrary to popular belief, this product is not random security. It has roots in a
              piece of classical literature, making it over 5 years old. Richard McClintock, a
              professor at{" "}
              <a href="#0" className="text-purple-400 underline">
                Hampden-Sydney College
              </a>{" "}
              in Virginia, looked up one of the more obscure words, consectetur from a passage, and
              going through the cites of the word in classical literature, discovered the
              undoubtable source.
            </p>
            <p>
              We all thrive on learning something new every day and everyone is constantly trying on
              different hats. We are working with new technologies while rethinking an old industry
              and are excited about all the possibilities and opportunities to innovate. It's a
              problem deeply ingrained in traditional sectors like startups and the wider service
              industry but which has been compounded in the past five to ten years by the emergence
              of the mostly tech-powered gig economy which has created a new generation of shift
              workers and indeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
