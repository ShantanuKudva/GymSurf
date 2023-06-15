import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Lottie from "lottie-react";
import search from "../assets/search.json";
import no from "../assets/no results.json";

export default function Search() {
  let [input, setInput] = useState("");
  let [exerciseDiv, setExerciseDivs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(3);
  const resultRef = useRef(null);

  function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  const showMore = () => {
    setVisible((prev) => prev + 3);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0f396a77afmshdaec13df86f820fp1d05c5jsnc717b9190101",
        "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
      },
    };

    const muscleParam = encodeURIComponent(input);
    const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?name=${muscleParam}`;

    console.log(url);
    try {
      const response = await fetch(url, options);
      const data = await response.json();

      // Map the data to create divs
      console.log(data);
      setExerciseDivs(data);

      // Set the exercise divs state
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <motion.div
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
      transition={{ duration: 0.5 }}
    >
      <form className="h-screen mt-20" onSubmit={handleSubmit}>
        <div className="search-text">Search.</div>
        <div className="search-list">
          <Lottie animationData={search} className="search-img" />
          <input
            type="text"
            required
            value={input}
            className="bg-inherit border border-white m-10 p-5 italic h-20"
            placeholder="example type 'chest'"
            onChange={(e) => {
              setInput(e.target.value);
              console.log(input);
            }}
          />
        </div>
      </form>

      {exerciseDiv.length === 0 && (
        <div className="col-span-full">
          <Lottie animationData={no} className="w-56 mt-[-10rem] m-auto my" />
          <h1 className="mt-10 mb-10 text-center font-light text-3xl">
            Nothing to show here
          </h1>
        </div>
      )}
      <div ref={resultRef}>
        {isLoading ? (
          <div className="m-auto font-mono  text-center col-span-full p-2 ">
            <h1 className="mt-[-20rem]">Loading {input}</h1>
          </div>
        ) : (
          <div className="search-result">
            {exerciseDiv.slice(0, visible).map((exercise, index) => (
              <div
                key={index}
                className="m-5 mt-0 border border-dashed border-white p-5"
              >
                <div className="text-2xl font-bold">
                  {index + 1}. {exercise.name}
                </div>
                <br />
                <div>Equipment type -&gt; {exercise.equipment}</div>
                <div>Exercise type -&gt; {exercise.type}</div>
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
      </div>
    </motion.div>
  );
}
