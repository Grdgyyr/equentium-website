import {
  FaComments,
  FaUsersCog,
  FaSearch,
  FaChartBar,
  FaBell,
  FaPlug,
  FaUserShield,
  FaDownload,
  FaSyncAlt,
} from "react-icons/fa";

const items = [
  {
    category: "API Authorization",
    features: [
      {
        icon: <FaComments className="text-xl" />,
        title: "Discussions",
        description:
          "Login box must find the right balance for the user convenience, privacy and security.",
      },
      {
        icon: <FaUsersCog className="text-xl" />,
        title: "Team views",
        description:
          "Login box must find the right balance for the user convenience, privacy and security.",
      },
      {
        icon: <FaSearch className="text-xl" />,
        title: "Powerful search",
        description:
          "Login box must find the right balance for the user convenience, privacy and security.",
      },
    ],
  },
  {
    category: "User Management",
    features: [
      {
        icon: <FaChartBar className="text-xl" />,
        title: "Analytics",
        description:
          "Login box must find the right balance for the user convenience, privacy and security.",
      },
      {
        icon: <FaBell className="text-xl" />,
        title: "Notifications",
        description:
          "Login box must find the right balance for the user convenience, privacy and security.",
      },
      {
        icon: <FaPlug className="text-xl" />,
        title: "Integrations",
        description:
          "Login box must find the right balance for the user convenience, privacy and security.",
      },
    ],
  },
  {
    category: "Standard Security",
    features: [
      {
        icon: <FaUserShield className="text-xl" />,
        title: "Privacy",
        description:
          "Login box must find the right balance for the user convenience, privacy and security.",
      },
      {
        icon: <FaDownload className="text-xl" />,
        title: "Data export",
        description:
          "Login box must find the right balance for the user convenience, privacy and security.",
      },
      {
        icon: <FaSyncAlt className="text-xl" />,
        title: "Real-time sync",
        description:
          "Login box must find the right balance for the user convenience, privacy and security.",
      },
    ],
  },
];

export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Why trust us?</h2>
        <p className="text-gray-400 mb-12">
          Many desktop publishing packages and web page editors now use lorem
          ipsum as their default model text, and a search will uncover many web
          sites still in their infancy.
        </p>

        {items.map((section, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-sm text-purple-400 font-semibold mb-4">
              {section.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.features.map((feature, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="text-purple-300">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
