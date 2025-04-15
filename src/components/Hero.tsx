import ArrowWIcon from "../assets/icons/arrow-w.svg";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2900px]  lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex item-center justify-center ">
          <a
            href="#"
            className="inline-flex gap-3  border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-color-white">Version 2.0 is here</span>
            <ArrowWIcon />
          </a>
        </div>
        <div className="flex justify-center">
          <h1 className="text-7xl sm:text-7xl font-bold tracking-tighter text-center mt-8 inline-flex">
            The API Security Framework
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-full font-medium">
            Get for free
          </button>
          <button className="bg-transparent border border-white text-white py-3 px-5 rounded-full font-medium hover:bg-white hover:text-black transition">
            Read the docs
          </button>
        </div>
      </div>
    </div>
  );
};
