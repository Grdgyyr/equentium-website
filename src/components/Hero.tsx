import ArrowWIcon from "../assets/icons/arrow-w.svg";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-16 sm:py-24 relative overflow-hidden">
      {/* Glowing background */}
      <div className="absolute h-[300px] w-[600px] sm:w-[1536px] sm:h-[768px] lg:w-[2900px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-80px)] sm:top-[calc(100%-120px)] z-0" />

      <div className="relative z-10 px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Announcement tag */}
        <div className="flex justify-center mb-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-white/30 py-1 px-3 rounded-md text-sm"
          >
            <span className="text-white">Version 2.0 is here</span>
            <ArrowWIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Hero Title */}
        <div className="flex justify-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center max-w-3xl leading-tight">
            The API Security Framework
          </h1>
        </div>

        {/* Description */}
        <div className="flex justify-center mt-6">
          <p className="text-center text-base sm:text-lg md:text-xl max-w-md text-gray-300">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button className="bg-white text-black py-3 px-6 rounded-full font-medium text-sm sm:text-base w-full sm:w-auto">
            Get for free
          </button>
          <button className="bg-transparent border border-white text-white py-3 px-6 rounded-full font-medium text-sm sm:text-base hover:bg-white hover:text-black transition w-full sm:w-auto">
            Read the docs
          </button>
        </div>
      </div>
    </div>
  );
};
