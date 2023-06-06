import React, { useState } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import img from "../assets/man-shoulderpress.avif";

export default function Beginner() {
  let [input, setInput] = useState("");
  let [exerciseDiv, setExerciseDivs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(3);

  const showMore = () => {
    setVisible((prev) => prev + 3);
  };

  let resultArray = [];

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const options = {
      method: "GET",
      params: {
        muscle: input.toString(),
        difficulty: "beginner",
      },
      headers: {
        "X-RapidAPI-Key": "0f396a77afmshdaec13df86f820fp1d05c5jsnc717b9190101",
        "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
      },
    };
    console.log(options.params.muscle);
    const baseUrl =
      "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises";
    const muscleParam = encodeURIComponent(input.toString());
    const url = `${baseUrl}?type=strength&muscle=${muscleParam}&difficulty=beginner`;
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      // console.log(data);
      data.forEach((result) => {
        resultArray = [...resultArray, result];
      });
      // // Map the data to create divs
      console.log(resultArray);
      setExerciseDivs(resultArray);

      // Set the exercise divs state
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }

  return (
    <motion.div
      className="scroll-smooth mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ transition: { duration: 0.5 } }}
    >
      {/* left */}
      <div className="grid grid-cols-2">
        <div className=" grid w-96 m-auto">
          <img
            src={img}
            className="border border-black rounded-3xl m-2 filter grayscale brightness-75"
          />
          <div className="m-10">
            <h1 className="text-3xl font-bold underline">beginner.</h1>
          </div>

          <div className="m-10">
            <h1 className="text-3xl  font-bold  text-left">
              "getting started is half the battle done."
            </h1>
          </div>

          <div className="m-10">
            <p className="text-m font-light ">
              and now we'll help you get through the other half.
            </p>
          </div>

          {/* right */}
        </div>
        <div className=" mx-auto">
          <div className="m-10 text-left">
            <p className="text-m mt-10 font-light ">
              here, i would like you to get yourself comfortable with 4
              fundamental exercises.
            </p>
          </div>
          <div className="m-10 text-left">
            <p className="text-m mt-10 font-light underline">
              .push-ups <br />
              .pull-ups <br />
              .bodyweight-squats <br />
              .dips
            </p>
          </div>
          <div className="m-10 text-left">
            <p className="text-m mt-10 font-light ">
              only then go ahead with other beginner-friendly
              free-weight/calisthenics exercises.
            </p>
          </div>
          <div className="mt-10 text-left mb-20">
            <form
              className="mx-auto grid grid-cols-5 gap-2 mt-20 h-96"
              onSubmit={handleSubmit}
            >
              <h1 className="col-span-5">
                select exercises based on your required target msucle.
              </h1>
              <button
                type="submit"
                className="border border-white rounded-l p-2 weightButton"
                onClick={(e) => setInput(e.target.value)}
                value="abdominals"
              >
                abdominals
              </button>

              <button
                type="submit"
                className="border border-white rounded-l p-2  weightButton"
                onClick={(e) => setInput(e.target.value)}
                value="abductors"
              >
                abductors
              </button>

              <button
                type="submit"
                className="border border-white rounded-l p-2  weightButton"
                onClick={(e) => setInput(e.target.value)}
                value="adductors"
              >
                adductors
              </button>

              <button
                type="submit"
                className="border border-white rounded-l p-2  weightButton"
                onClick={(e) => setInput(e.target.value)}
                value="biceps"
              >
                biceps
              </button>

              <button
                type="submit"
                className="border border-white rounded-l p-2  weightButton"
                onClick={(e) => setInput(e.target.value)}
                value="calves"
              >
                calves
              </button>

              <button
                type="submit"
                className="border border-white rounded-l p-2  weightButton"
                onClick={(e) => setInput(e.target.value)}
                value="chest"
              >
                chest
              </button>

              <button
                type="submit"
                className="border border-white rounded-l p-2  weightButton"
                onClick={(e) => setInput(e.target.value)}
                value="forearms"
              >
                forearms
              </button>

              <button
                type="submit"
                className="border border-white rounded-l p-2  weightButton"
                onClick={(e) => setInput(e.target.value)}
                value="glutes"
              >
                glutes
              </button>

              <button
                type="submit"
                className="border border-white rounded-l p-2  weightButton"
                onClick={(e) => setInput(e.target.value)}
                value="hamstrings"
              >
                hamstrings
              </button>

              <button
                type="submit"
                className="border border-white rounded-l p-2  weightButton "
                onClick={(e) => setInput(e.target.value)}
                value="lats"
              >
                lats
              </button>

              <button
                type="submit"
                className="border border-white rounded-l p-2  weightButton "
                onClick={(e) => setInput(e.target.value)}
                value="lower_back"
              >
                lower back
              </button>

              <button
                type="submit"
                className="border border-white rounded-l p-2  weightButton "
                onClick={(e) => setInput(e.target.value)}
                value="middle_back"
              >
                middle_back
              </button>

              <button
                type="submit"
                className="border border-white rounded-l p-2  weightButton "
                onClick={(e) => setInput(e.target.value)}
                value="forearms"
              >
                forearms
              </button>

              <button
                type="submit"
                className="border border-white rounded-l p-2  weightButton "
                onClick={(e) => setInput(e.target.value)}
                value="neck"
              >
                neck
              </button>

              <button
                type="submit"
                className="border border-white rounded-l p-2  weightButton "
                onClick={(e) => setInput(e.target.value)}
                value="quadraceps"
              >
                quadraceps
              </button>

              <button
                type="submit"
                className="border border-white rounded-l p-2  weightButton "
                onClick={(e) => setInput(e.target.value)}
                value="traps"
              >
                traps
              </button>

              <button
                type="submit"
                className="border border-white rounded-l p-2  weightButton "
                onClick={(e) => setInput(e.target.value)}
                value="triceps"
              >
                triceps
              </button>
            </form>
          </div>
        </div>
      </div>

      {!(input === "") && !isLoading && (
        <div className="text-center m-5 mt-20 font-serif text-2xl underline">
          {input} exercise.
        </div>
      )}

      {isLoading ? (
        <div className="m-auto font-mono text-center col-span-full p-2 ">
          Loading {input} exercise...
        </div>
      ) : (
        <div className="grid grid-cols-3">
          {exerciseDiv.slice(0, visible).map((exercise, index) => (
            <div
              key={index}
              className="m-5 border border-dashed border-white p-5"
            >
              <div className="text-2xl font-bold">
                {index + 1}. {exercise.name}
              </div>
              <br />
              <div>Equipment type -&gt; {exercise.equipment}</div>
              <p className="m-3 font-thin ">{exercise.instructions}</p>
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
        </div>
      )}
    </motion.div>
  );
}
