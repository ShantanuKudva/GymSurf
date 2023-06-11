import { React, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import img from "../assets/legs.avif";
import { calcLength, motion } from "framer-motion";
import Lottie from "lottie-react";
import gym from "../assets/weight-training.json";

export default function Home() {
  let [part, setPart] = useState("");
  let [exerciseDiv, setExerciseDivs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(6);
  const exerciseRef = useRef(null);

  const showMore = () => {
    setVisible((prev) => prev + 6);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setVisible(6);
    setIsLoading(true);

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0f396a77afmshdaec13df86f820fp1d05c5jsnc717b9190101",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    const baseUrl = "https://exercisedb.p.rapidapi.com/exercises/";
    const muscleParam = encodeURIComponent(part.toString());
    const url = `${baseUrl}target/${muscleParam}`;
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setExerciseDivs(data);

      // Set the exercise divs state
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
    exerciseRef.current.scrollIntoView({ behavior: "smooth" });
    // setPart("");
  }

  return (
    <motion.div
      className="scroll-smooth mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ transition: { duration: 0.5 } }}
    >
      {/* left */}

      <div className="weight-training-page ">
        <div className=" grid m-auto mt-[5rem]">
          {/* <img
            src={img}
            className="border border-black rounded-3xl m-2 filter grayscale brightness-75"
          /> */}
          <Lottie className="responsive-img" animationData={gym} />

          <div className="m-10">
            <h1 className="text-3xl  font-bold  text-left">
              "The only bad workout is the one that didn't happen."
            </h1>
          </div>

          <div className="m-10">
            <p className="text-m font-light ">
              we help you to stay consistent by giving you structured content
              suited for anyone and everyone.
            </p>
          </div>
        </div>

        {/* right */}

        <form className="weight-training-form " onSubmit={handleSubmit}>
          <div className="text-left col-span-5">
            <div className="my-10">
              <h1 className="text-4xl font-bold ">weight-training.</h1>
            </div>
            <p className="text-m mt-10 font-light ">
              for a beginner, i would like you to get yourself comfortable with
              4 fundamental exercises.
            </p>

            <p className="text-m my-10 font-bold ">
              .push-ups <br />
              .pull-ups <br />
              .bodyweight-squats <br />
              .dips
            </p>
          </div>

          <h1 className="col-span-5 text-xl text-left">
            select exercises based on your required target muscle.
          </h1>

          <div className="button-grid">
            <button
              type="submit"
              className="border border-white rounded-l p-2 weightButton"
              onClick={(e) => setPart(e.target.value)}
              value="pectorals"
            >
              chest
            </button>

            <button
              type="submit"
              className="border border-white rounded-l p-2  weightButton"
              onClick={(e) => setPart(e.target.value)}
              value="lats"
            >
              lats
            </button>

            <button
              type="submit"
              className="border border-white rounded-l p-2  weightButton"
              onClick={(e) => setPart(e.target.value)}
              value="upper back"
            >
              upper-back
            </button>

            <button
              type="submit"
              className="border border-white rounded-l p-2  weightButton"
              onClick={(e) => setPart(e.target.value)}
              value="traps"
            >
              traps
            </button>

            <button
              type="submit"
              className="border border-white rounded-l p-2  weightButton"
              onClick={(e) => setPart(e.target.value)}
              value="abs"
            >
              abs
            </button>

            <button
              type="submit"
              className="border border-white rounded-l p-2  weightButton"
              onClick={(e) => setPart(e.target.value)}
              value="biceps"
            >
              biceps
            </button>

            <button
              type="submit"
              className="border border-white rounded-l p-2  weightButton"
              onClick={(e) => setPart(e.target.value)}
              value="delts"
            >
              shoulder
            </button>

            <button
              type="submit"
              className="border border-white rounded-l p-2  weightButton"
              onClick={(e) => setPart(e.target.value)}
              value="triceps"
            >
              triceps
            </button>

            <button
              type="submit"
              className="border border-white rounded-l p-2  weightButton"
              onClick={(e) => setPart(e.target.value)}
              value="hamstrings"
            >
              hamstrings
            </button>

            <button
              type="submit"
              className="border border-white rounded-l p-2  weightButton "
              onClick={(e) => setPart(e.target.value)}
              value="glutes"
            >
              glutes
            </button>

            <button
              type="submit"
              className="border border-white rounded-l p-2  weightButton "
              onClick={(e) => setPart(e.target.value)}
              value="quads"
            >
              quads
            </button>

            <button
              type="submit"
              className="border border-white rounded-l p-2  weightButton "
              onClick={(e) => setPart(e.target.value)}
              value="calves"
            >
              calves
            </button>

            <button
              type="submit"
              className="border border-white rounded-l p-2  weightButton "
              onClick={(e) => setPart(e.target.value)}
              value="forearms"
            >
              forearms
            </button>

            <button
              type="submit"
              className="border border-white rounded-l p-2  weightButton "
              onClick={(e) => setPart(e.target.value)}
              value="cardiovascular system"
            >
              cardio
            </button>
          </div>
        </form>
      </div>

      <div ref={exerciseRef}>
        {!(part === "") && !isLoading && (
          <div className="text-center m-5 font-serif text-2xl underline">
            {part} exercise
          </div>
        )}

        {isLoading ? (
          <div className="m-auto font-mono text-center col-span-full p-2 mt-5">
            Loading {part} exercise...
          </div>
        ) : (
          <div className="weight-training-result">
            {exerciseDiv.slice(0, visible).map((exercise, index) => (
              <div
                key={index}
                className="m-5 border border-dashed border-white p-5"
              >
                <div className="text-2xl font-bold">
                  {index + 1}. {exercise.name}
                </div>
                <br />
                <img src={exercise.gifUrl} className="result-img" />
                <p className="mt-5 text-center">
                  Exercise Equipment -&gt; {exercise.equipment}
                </p>
              </div>
            ))}
            {visible < exerciseDiv.length && (
              <button
                className="col-span-full mx-20 m-5 p-5 font-bold border-white weightButton"
                onClick={showMore}
              >
                Load More
              </button>
            )}

            {/* <button className="col-span-full" onClick={showMore}>
            Load More
          </button> */}
          </div>
        )}
      </div>
    </motion.div>
  );
}
