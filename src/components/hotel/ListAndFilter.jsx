"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger and close
import Filter from "../filter/Filter";

const ListAndFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="relative md:col-span-3 col-span-12">
      {/* Hamburger menu button for small devices */}
      <button
        className="md:hidden block text-black py-2  rounded mb-4 items-center space-x-2"
        onClick={toggleFilter}
      >
        {isFilterOpen ? (
          <FaTimes className="text-black" /> // Close icon in black
        ) : (
          <FaBars className="text-black" /> // Hamburger icon in black
        )}
      </button>

      {/* Sidebar Filter */}
      <div
        className={`fixed top-[83px] left-0 w-64 p-5 bg-white z-50 h-full transition-transform transform ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:h-auto`}
      >
        <Filter />
      </div>

      {/* Overlay to close the filter when clicking outside (for small screens) */}
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleFilter}
        ></div>
      )}
    </div>
  );
};

export default ListAndFilter;
