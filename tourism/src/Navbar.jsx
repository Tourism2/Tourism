import React from "react";
import { Link } from "react-router-dom"; // Import Link for React Router

function Navbar() {
  return (
    <div>
      <body className="bg-black">
        <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
          <a className="text-3xl font-bold leading-none" to="/">
            <p className="nav logo">Journey Jot</p>
          </a>
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-black p-3">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-10">
            <li>
              <Link
                to="/"
                className="nav text-sm text-black hover:text-gray-500"
              >
                HOME
              </Link>
            </li>
            <li>
              <a
                href="/about"
                className="nav text-sm text-black hover:text-gray-500"
              >
                BLOGS
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="nav text-sm text-black hover:text-gray-500"
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="nav text-sm text-black hover:text-gray-500"
              >
                CONTACT US
              </a>
            </li>
          </ul>

          <button className="lg:inline-block hidden text-sm font-semibold bg-black text-white hover:bg-gray-800 py-2 px-4 rounded-2xl">
            <Link to="/signup">Login/SignUp</Link>
          </button>
        </nav>
      </body>
    </div>
  );
}

export default Navbar;
