import { React } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/girl-squat.avif";
import img2 from "../assets/tricep-pushdowns.avif";
import img3 from "../assets/man-pushweight.avif";
import img4 from "../assets/girl-backsquat.avif";
import img5 from "../assets/man-alone.avif";
import Lottie from "lottie-react";
import phoneAnimation from "../assets/hand-animation.json";
import contactRotating from "../assets/Logo rotating.json";
import Contact from "./Contact.jsx";

export default function Home() {
  return (
    <motion.div
      className="scroll-smooth mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ transition: { duration: 0.5 } }}
    >
      {/* left */}
      <motion.div
        className="mx-10 text-center col-span-full pt-20"
        initial={{
          opacity: 0,
          y: -50,
          backgroundColor: "white",
        }}
        animate={{
          opacity: 1,
          y: 0,
          backgroundColor: "black",
        }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-text">GymSurf.</h1>
        <p className="text-xl font-light ">get going.</p>
      </motion.div>

      <div className="home-grid">
        <div className=" grid  m-auto mt-[7rem]">
          <div className="text-grid">
            <div className="m-10">
              <h1 className="text-3xl  font-bold  text-left">Get It Right.</h1>
              <p className="text-m font-light ">
                Your one stop solution to help you chase your dream physique.
              </p>
            </div>

            <div className="m-10">
              <h1 className="text-3xl  font-bold  text-left">Get it Smart.</h1>
              <p className="text-m font-light ">
                We only share content which is knowledgeable and smart. You can
                search for various different exercises for different body parts
              </p>
            </div>

            <div className="m-10">
              <h1 className="text-3xl  font-bold  text-left">Get Moving.</h1>
              <p className="text-m font-light ">
                Experience the transformative power of our fitness programs
                designed to help you reach your goals.
              </p>
            </div>

            <div className="m-10">
              <h1 className="text-3xl  font-bold  text-left">
                Get your Results.
              </h1>
              <p className="text-m font-light ">
                Ignite your energy, find your motivation, and embrace an active
                lifestyle with our comprehensive workout routines.
              </p>
            </div>

            <div className="m-10 col-span-full">
              <h1 className="text-3xl  font-bold  text-left">
                Go above and beyond.
              </h1>
              <p className="text-m font-light ">
                The design of this webpage is done so that any beginner can feel
                inclusive and enjoy whislt learning a thing or two about
                everything that is to be learnt about fitness. That is the motto
                behind everything we do. We go above and beyond everybody's
                expectations
              </p>
            </div>
          </div>
        </div>

        {/* right */}

        <div className="mx-auto grid grid-cols-2 gap-2 mt-20 ">
          <div className="image-grid">
            <img
              src={img1}
              className="border border-black rounded-3xl my-10  row-span-2"
            />

            <img
              src={img2}
              className="border border-black rounded-3xl  grayscale scale-75 brightness-75"
            />
          </div>
          <div className="image-grid">
            <img
              src={img4}
              className="border border-black rounded-3xl my-10 grayscale scale-75"
            />
            <img
              src={img5}
              className="border border-black rounded-3xl my-10  row-span-2"
            />
          </div>
        </div>
        <div className="col-span-full text-center my-20 ">
          <div className="hero-text-2">Got somthing to tell?</div>
          <div className="hero-title-2">Don't hold back, spill the beans!</div>
          <div className="contact-grid">
            <div>
              <Contact />
            </div>
            <div>
              <Lottie animationData={phoneAnimation} className="w-1/2 m-auto" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
