import React, { useState, useEffect, useRef } from "react";
import { calcLength, motion } from "framer-motion";
import ppl from "../assets/pdf/ppl.pdf";
import brosplit from "../assets/pdf/brosplit.pdf";
import Lottie from "lottie-react";
import program from "../assets/programs.json";
import no from "../assets/no results.json";

export default function Programs() {
  let [pdf, setPdf] = useState(null);
  let [display, setDisplay] = useState(null);
  const pdfRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    switch (pdf) {
      case "ppl": {
        setDisplay(ppl);
        break;
      }
      case "brosplit": {
        setDisplay(brosplit);
        break;
      }

      case "upperlower": {
        setDisplay(null);
        break;
      }

      case "fullbody": {
        setDisplay(null);
        break;
      }

      default: {
        setDisplay(null);
      }
    }
    pdfRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ transition: { duration: 0.5 } }}
    >
      <div>
        <div className="grid grid-cols-2 ">
          <div className=" grid w-96 m-auto mt-[5rem]">
            <Lottie animationData={program} className=" m-auto" />

            <div className="m-10">
              <h1 className="text-3xl  font-bold  text-left">
                "Success is neither magical nor mysterious. It is the natural
                consequence of consistently applying a daily routine."
              </h1>
            </div>

            <div className="m-10">
              <p className="text-m font-light ">
                explore various different programs that i have provided, for
                free!
              </p>
            </div>
          </div>

          <form
            className="mx-auto grid grid-cols-2 gap-2 mt-20 h-96 "
            onSubmit={handleSubmit}
          >
            <div className="my-10">
              <h1 className="text-3xl font-bold ">programs.</h1>
            </div>
            <h1 className="col-span-full text-left text-3xl">
              select a program.
              <p className="text-sm mt-3">
                Note: If you are a beginner, I would recommend going for a Full
                Body Split or an Upper-Lower Split
              </p>
            </h1>

            <button
              type="submit"
              className="border border-white rounded-l p-2 weightButton"
              onClick={(e) => setPdf(e.target.value)}
              value="ppl"
            >
              Push-Pull-Legs Split
            </button>

            <button
              type="submit"
              className="border border-white rounded-l p-2 weightButton"
              onClick={(e) => setPdf(e.target.value)}
              value="brosplit"
            >
              Bro-Split
            </button>

            <button
              type="submit"
              className="border border-white rounded-l p-2 weightButton"
              onClick={(e) => setPdf(e.target.value)}
              value="upperlower"
            >
              Upper-Lower Split
            </button>

            <button
              type="submit"
              className="border border-white rounded-l p-2 weightButton"
              onClick={(e) => setPdf(e.target.value)}
              value="fullbody"
            >
              Full-Body Split
            </button>
          </form>
        </div>
      </div>

      <div ref={pdfRef}>
        {display === null ? (
          <div className="col-span-full">
            <Lottie animationData={no} className="w-1/4 mt-10 m-auto" />
            <h1 className="mt-10 mb-10 text-center font-light text-3xl">
              Nothing to show here
            </h1>
          </div>
        ) : (
          <iframe
            src={display}
            width="50%"
            height="600px"
            title=""
            className="border border-black rounded-lg mb-2 m-auto bg-black"
          />
        )}
      </div>
      {/* <div ref={pdfRef}>
        <iframe
          src={display}
          width="50%"
          height="600px"
          title="PDF Viewer"
          className="border border-black rounded-lg mb-2 m-auto"
        />
      </div> */}
    </motion.div>
  );
}
