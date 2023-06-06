import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Beginner from "./Beginner";
import WeightTraining from "./WeightTraining";
import Programs from "./Programs";
import GymEssentials from "./GymEssentials";
import AboutMe from "./AboutMe";
import Search from "./Search";
import { AnimatePresence } from "framer-motion";

export default function PageAnimations() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="beginner" element={<Beginner />} /> */}
          <Route path="weight-training" element={<WeightTraining />} />
          <Route path="programs" element={<Programs />} />
          <Route path="gym-essentials" element={<GymEssentials />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
