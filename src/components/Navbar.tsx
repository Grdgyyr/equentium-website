"use client";

import { useState } from "react";
import Image from "next/image";
import logoImage from "../assets/images/logo1.png";
import MenuIcon from "../assets/icons/menu.svg";
import CloseIcon from "../assets/icons/close.svg";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full z-30 top-0 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <div className="flex-shrink-0 z-20">
            <a href="/" className="flex items-center space-x-2">
              <Image src={logoImage} alt="Logo" width={38} height={38} />
            </a>
          </div>

          {/* Centered auth buttons (mobile only) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2 z-10 md:hidden">
            <a
              href="#"
              className="text-white/80 hover:text-white transition text-sm font-medium"
            >
              Sign in
            </a>
            <a
              href="#"
              className="px-4 py-2 border border-white/40 text-white/90 rounded-full text-sm font-semibold backdrop-blur-sm transition hover:border-white hover:text-white shadow-[0_0_6px_rgba(255,255,255,0.4)] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
            >
              Sign up{" "}
              <span className="ml-1 text-[#a855f7] font-medium tracking-normal transition hover:drop-shadow-[0_0_4px_rgba(168,85,247,0.6)]">
                →
              </span>
            </a>
          </div>

          {/* Menu toggle */}
          <div className="md:hidden z-20">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {menuOpen ? (
                <MenuIcon className="w-6 h-6 text-white" />
              ) : (
                <MenuIcon className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 items-center">
            {["About", "Integrations", "Pricing", "Customers", "Changelog"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/60 hover:text-white transition"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex space-x-3 items-center">
            <a
              href="#"
              className="text-white/60 hover:text-white transition font-medium"
            >
              Sign in
            </a>
            <a
              href="#"
              className="px-4 py-2 border border-white/40 text-white/90 rounded-full text-sm font-semibold backdrop-blur-sm transition hover:border-white hover:text-white shadow-[0_0_6px_rgba(255,255,255,0.4)] hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]"
            >
              Sign up{" "}
              <span className="ml-1 text-[#a855f7] font-medium tracking-normal transition hover:drop-shadow-[0_0_4px_rgba(168,85,247,0.6)]">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
  <div className="md:hidden bg-black/80 backdrop-blur-lg rounded-xl shadow-xl px-6 py-4 mt-2 mx-4 z-20 overflow-hidden border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
    <ul className="space-y-3 py-2 px-4">
      {["About", "Integrations", "Pricing", "Customers", "Changelog"].map((item) => (
        <li key={item}>
          <a
            href="#"
            className="block text-slate-300 hover:text-white font-medium py-1 transition"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}

    </header>
  );
};
