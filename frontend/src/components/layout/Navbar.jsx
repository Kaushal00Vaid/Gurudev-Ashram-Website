import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link to="/" className="text-xl font-bold text-gray-800">
            Gurudev Ashram
          </Link>
          <div className="flex gap-x-8">
            <Link
              to="/about"
              className="text-gray-600 hover:text-shadow-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              to="/donate"
              className="text-gray-600 hover:text-shadow-gray-900 transition-colors"
            >
              Donate
            </Link>
            <Link
              to="/shop"
              className="text-gray-600 hover:text-shadow-gray-900 transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/events"
              className="text-gray-600 hover:text-shadow-gray-900 transition-colors"
            >
              Events
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
