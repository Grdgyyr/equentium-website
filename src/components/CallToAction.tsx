export const CallToAction = () => {
  return (
    <section className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-16 sm:py-24 relative overflow-hidden text-center">
      {/* Gradient Glow Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-gradient-radial from-purple-600/30 to-transparent rounded-full blur-3xl opacity-60 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtitle */}
        <p className="text-sm sm:text-base text-purple-300 mb-3 sm:mb-4">
          The{" "}
          <span className="text-purple-500 font-medium">security first</span>{" "}
          platform
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 text-center leading-tight">
          Take control of your business
        </h2>

        {/* Paragraph */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto px-2 sm:px-0">
          All the lorem ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-white text-black rounded-full font-medium shadow-md hover:shadow-lg transition hover:outline hover:outline-2 hover:outline-white text-sm sm:text-base"
          >
            Get Started
            <span className="text-purple-600 text-xl sm:text-2xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
