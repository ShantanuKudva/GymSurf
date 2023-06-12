import React from "react";
import Navbar from "./Navbar";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-black text-white ">
      <Navbar />
      {/* THE PAGES ARE RENDERED HERE */}
      <div className="mt-[6rem] ">
        <Outlet />
      </div>

      <footer className="text-center  ">Made with ♥ by Shantanu Kudva</footer>
    </div>
  );
}
