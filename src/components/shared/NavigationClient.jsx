"use client"; // Enable client-side functionality

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/green-house-logo.png";
import Logout from "../auth/Logout";

const NavigationClient = ({ session }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="max-w-7xl flex items-center mx-auto justify-between px-4 py-4 fixed top-0 w-full left-0 right-0 z-50  lg:bg-transparent">
      <Link className="flex items-center gap-2" href="/">
        <Image src={logo} alt="Stay Swift Logo" width={50} height={50} />
        <span className="font-bold text-lg">HOTELHUNT</span>
      </Link>

      <div className="md:hidden">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-green-500 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8">
        <li>
          <Link href="#">Recommended Places</Link>
        </li>
        <li>
          <Link href="/hotels">Hotels</Link>
        </li>
        <li>
          <Link href="#">Contact Us</Link>
        </li>
        <li>
          <Link href="/bookings">Bookings</Link>
        </li>
        <li className="relative" ref={profileMenuRef}>
          {session?.user ? (
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              {session?.user?.image ? (
                <Image
                  className="border-2 border-green-400 rounded-full"
                  src={session.user.image}
                  height={40}
                  width={40}
                  alt="User profile"
                />
              ) : (
                <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full">
                  <span className="text-white">
                    {session?.user?.name.slice(0, 1)}
                  </span>
                </div>
              )}

              {/* Dropdown Menu */}
              {isProfileMenuOpen && (
                <div className="absolute right-0 top-full mt-2 p-10 w-44 bg-white border rounded-md shadow-lg z-10">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 border-b border-green-400 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <div className="block text-left px-4 py-2 border-b border-green-400 text-gray-700 hover:bg-gray-100">
                    <Logout />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-green-300 px-6 py-3 text-white font-bold rounded-md"
            >
              Login
            </Link>
          )}
        </li>
      </ul>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 right-0 bg-gray-200 blur-bg shadow-md md:hidden flex flex-col items-center gap-4 py-4">
          <li>
            <Link href="#">Recommended Places</Link>
          </li>
          <li>
            <Link href="/hotels">Hotels</Link>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
          <li>
            <Link href="/bookings">Bookings</Link>
          </li>
          <li>
            {session?.user ? (
              <div className="flex flex-col items-center gap-2">
                {session?.user?.image ? (
                  <Image
                    className="border-2 border-green-400 rounded-full"
                    src={session.user.image}
                    height={40}
                    width={40}
                    alt="User profile"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-300 flex  items-center justify-center rounded-full">
                    <span className="text-white">U</span>
                  </div>
                )}
                <div className="border-gray-700  px-3 py-1  text-white rounded bg-green-400">
                  <Logout />
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-green-300 px-6 py-3 text-white font-bold rounded-md"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavigationClient;
