import Image from "next/image";
import logoImage from "../assets/images/logo1.png";
import InstaIcon from "../assets/icons/insta.svg";
import XSocial from "../assets/icons/x-social.svg";
import TiktokIcon from "../assets/icons/tiktok.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-10 bg-black text-white/60 border-t border-t-white/20">
      <div className="container flex flex-col items-center text-center">
        {/* Logo */}
        <a href="/" aria-label="Company" className="mb-6">
          <Image src={logoImage} alt="Company Logo" width={38} height={38} />
        </a>

        {/* Copyright Notice */}
        <p className="mb-6">© Company.com - All rights reserved.</p>

        {/* Social Links */}
        <ul className="flex gap-4 mb-8">
          <li>
            <a href="https://x.com/" target="_blank" aria-label="Twitter" className="hover:scale-110 transition-transform">
              <XSocial />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram" className="hover:scale-110 transition-transform">
              <InstaIcon />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/en/" target="_blank" aria-label="Tiktok" className="hover:scale-110 transition-transform">
              <TiktokIcon />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank" aria-label="Youtube" className="hover:scale-110 transition-transform">
              <YoutubeIcon />
            </a>
          </li>
        </ul>

        {/* Footer navigation sections */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { title: "Products", links: ["Features", "Integrations", "Pricing & Plans", "Changelog", "Our method"] },
            { title: "Company", links: ["About us", "Diversity & Inclusion", "Blog", "Careers", "Financial statements"] },
            { title: "Resources", links: ["Community", "Terms of service", "Report a vulnerability"] },
            { title: "Legals", links: ["Refund policy", "Terms & Conditions", "Privacy policy", "Brand Kit"] },
          ].map((section) => (
            <div key={section.title}>
              <h6 className="text-lg font-semibold text-white mb-3">{section.title}</h6>
              <ul>
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="" className="hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
