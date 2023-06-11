import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  let [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      {showNavbar && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="hidden-navbar m-auto"
        >
          <ul className="grid gap-2 text-center h-full">
            <Link className="m-auto flex gap-3 font-bold text-xl" to="/search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="25px"
                height="25px"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
              </svg>
              <div className="">Search</div>
            </Link>
            <li className="m-auto">
              <NavLink to="/" className="text-black  hover:text-gray-500 ">
                .home
              </NavLink>
            </li>
            <li className="m-auto">
              <NavLink
                to="/weight-training"
                className="text-black  hover:text-gray-500 "
              >
                .weight-training
              </NavLink>
            </li>
            <li className="m-auto">
              <NavLink
                to="/programs"
                className="text-black hover:text-gray-500 "
              >
                .programs
              </NavLink>
            </li>
            <li className="m-auto">
              <NavLink
                to="/gym-essentials"
                className="text-black  hover:text-gray-500 "
              >
                .gym-essentials
              </NavLink>
            </li>

            <li className="m-auto p-5 " onClick={toggleNavbar}>
              <svg
                className="cursor-pointer"
                fill="#000000"
                width="30px"
                height="30px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z" />
              </svg>
            </li>
          </ul>
        </motion.div>
      )}

      <nav className="navbar">
        <div className="nav-items-responsive">
          <div className="title-responsive ">
            <li className="hamburger-icon opacity-0 " onClick={toggleNavbar}>
              <svg
                className="m-auto mb-4"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18L20 18"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M4 12L20 12"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M4 6L20 6"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </li>
            <Link
              to="/"
              className="text-black text-2xl ml-10 font-bold grid grid-flow-col logo"
            >
              GymSurf.
              <p className="font-extralight text-sm  mt-2 ml-2 w-24">
                get going.
              </p>
            </Link>
          </div>

          <ul className="flex ul-responsive">
            <Link className="m-auto" to="/search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="25px"
                height="25px"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
              </svg>
            </Link>
            <li className="mx-10 ">
              <NavLink
                to="/weight-training"
                className="text-black  hover:text-gray-500"
              >
                .weight-training
              </NavLink>
            </li>
            <li className="mx-10">
              <NavLink
                to="/programs"
                className="text-black hover:text-gray-500"
              >
                .programs
              </NavLink>
            </li>
            <li className="mx-10">
              <NavLink
                to="/gym-essentials"
                className="text-black  hover:text-gray-500"
              >
                .gym-essentials
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
