export const Recruitment = () => {
    return (
      <div className="bg-gradient-to-b from-black to-[#5D2CA8] text-white py-20 px-6">
        {/* Top Text Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join a team of makers</h2>
          <p className="text-gray-300 text-lg md:text-xl">
            We are makers at heart. Problem solvers and storytellers. We are a diverse team of individuals who build things to make our customers happy.
          </p>
        </div>
  
        {/* Traits Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: (
                <svg className="mx-auto mb-4 w-10 h-10 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M12 2C12 2 8 8 8 11.5C8 13.9853 10.0147 16 12.5 16C14.9853 16 17 13.9853 17 11.5C17 8 12 2 12 2Z" />
                </svg>
              ),
              title: "Passionate",
              text: "You are passionate about digital products of any kind and are a builder at heart.",
            },
            {
              icon: (
                <svg className="mx-auto mb-4 w-10 h-10 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14H11V21L20 10H13Z" />
                </svg>
              ),
              title: "Energetic",
              text: "You are passionate about digital products of any kind and are a builder at heart.",
            },
            {
              icon: (
                <svg className="mx-auto mb-4 w-10 h-10 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.48 17.52 2 12 2ZM12 17L7 12H10V7H14V12H17L12 17Z" />
                </svg>
              ),
              title: "Achiever",
              text: "You are passionate about digital products of any kind and are a builder at heart.",
            },
          ].map(({ icon, title, text }, i) => (
            <div key={i}>
              {icon}
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-400">{text}</p>
            </div>
          ))}
        </div>
  
        {/* Gallery Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://preview.cruip.com/stellar/images/recruitment-01.jpg",
            "https://preview.cruip.com/stellar/images/recruitment-02.jpg",
            "https://preview.cruip.com/stellar/images/recruitment-03.jpg",
            "https://preview.cruip.com/stellar/images/recruitment-04.jpg",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Recruitment image ${i + 1}`}
              className="rounded-lg object-cover w-full h-auto"
            />
          ))}
        </div>
      </div>
    );
  };
  