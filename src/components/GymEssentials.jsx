import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import exercise from "../assets/exercise.json";
import youtub from "../assets/youtube.json";
export default function Programs() {
  const [dropdownVisible, setDropdownVisible] = useState([false, false]);

  // Function to toggle dropdown visibility
  const toggleDropdown = (index) => {
    setDropdownVisible((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = !prevState[index];
      return updatedState;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ transition: { duration: 0.5 } }}
      className=""
    >
      <div className="gym-essential-first p-10">
        <Lottie animationData={exercise} className="responsive-img" />
        <div className="m-auto mx-10">
          <h1 className="text-4xl font-bold ">.gym-essentials</h1>
          <h2 className="text-xl font-light mt-10">
            Let's tackle some of those burning questions and doubts we all
            encounter when we start off on our adventure!
          </h2>
        </div>
      </div>

      <div className="answer-grid">
        <ul className="m-10">
          <li className="text-lg font-bold ">
            Where do I start? It can be overwhelming to step into a gym for the
            first time. You might wonder which exercises to begin with or how to
            structure your workouts?
          </li>
          {dropdownVisible[0] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: dropdownVisible[0] ? 1 : 0,
                height: dropdownVisible[0] ? "auto" : 0,
              }}
              exit={{ opacity: 0, height: 0 }}
              className=" bg-white text-black p-2 rounded-b-lg mt-3"
            >
              <p>
                I have it all covered. You can start off by checking out the
                programs according to your requirements. After that, you can
                search about the exercises on YouTube or make use of the search
                function provided in the app.
              </p>
            </motion.div>
          )}
          <br />
          <button
            onClick={() => toggleDropdown(0)}
            className="bg-white p-3 rounded-lg text-black block m-auto"
          >
            {dropdownVisible[0] ? "Hide" : "Show"} answer
          </button>
        </ul>

        <ul className="m-10">
          <li className="text-lg font-bold">
            What should I wear? Choosing the right gym attire can be puzzling.
            You may question whether to prioritize style or functionality and
            what clothes and shoes are suitable for different workouts.
          </li>
          {dropdownVisible[1] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className=" bg-white text-black p-2 rounded-b-lg mt-3"
            >
              <p>
                When it comes to choosing gym attire, prioritize comfort and
                functionality. Opt for clothes and footwear that allow you to
                move freely and provide proper support. Find the right fit,
                consider layering options, and don't forget to express your
                personal style. The key is to feel comfortable and confident
                during your workouts while staying focused on your fitness
                goals. More importantly, do not wear cotton tees. No one wants
                to see a huge patch of sweat on your back. Go for somehing like
                quickdry tees and shorts.
              </p>
            </motion.div>
          )}
          <br />
          <button
            onClick={() => toggleDropdown(1)}
            className="bg-white p-3 rounded-lg text-black block m-auto"
          >
            {dropdownVisible[1] ? "Hide" : "Show"} answer
          </button>
        </ul>

        <ul className="m-10">
          <li className="text-lg font-bold">
            How do I use the equipment? Gym equipment can appear complex and
            intimidating at first. You might be unsure about how to properly use
            machines, free weights, or even proper form to avoid injuries.
          </li>
          {dropdownVisible[2] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className=" bg-white text-black p-2 rounded-b-lg mt-3"
            >
              <p>
                When it comes to using gym machines and equipment, it's
                important to start with proper form and technique. The GymApp
                provides a dedicated section that guides beginners on how to use
                various machines effectively and safely. It offers step-by-step
                instructions, tips on correct posture and movement, and even
                video demonstrations. By following these guidelines, beginners
                can maximize their workouts, minimize the risk of injury, and
                ensure they are getting the most out of their gym experience.
              </p>
            </motion.div>
          )}
          <br />
          <button
            onClick={() => toggleDropdown(2)}
            className="bg-white p-3 rounded-lg text-black block m-auto"
          >
            {dropdownVisible[2] ? "Hide" : "Show"} answer
          </button>
        </ul>

        <ul className="m-10">
          <li className="text-lg font-bold">
            How do I set realistic goals? Setting achievable goals is essential
            for progress. You might wonder how to define your fitness objectives
            and establish a plan to reach them.
          </li>
          {dropdownVisible[3] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className=" bg-white text-black p-2 rounded-b-lg mt-3"
            >
              <p>
                Proper nutrition is a key component of a successful fitness
                journey. It's important to understand the role of macronutrients
                (carbohydrates, proteins, and fats) and micronutrients (vitamins
                and minerals) in supporting overall health and fitness goals.
                Consulting with a nutrition professional and accessing reliable
                resources can provide valuable guidance on what to eat, portion
                sizes, and the importance of a balanced diet. By prioritizing
                nutrition alongside exercise, you can optimize your results and
                promote long-term health and well-being.
              </p>
            </motion.div>
          )}
          <br />
          <button
            onClick={() => toggleDropdown(3)}
            className="bg-white p-3 rounded-lg text-black block m-auto"
          >
            {dropdownVisible[3] ? "Hide" : "Show"} answer
          </button>
        </ul>

        <ul className="m-10">
          <li className="text-lg font-bold">
            Should I follow a specific workout program? With numerous workout
            programs available, you may question whether to follow a structured
            routine designed by professionals or create your own.
          </li>
          {dropdownVisible[4] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className=" bg-white text-black p-2 rounded-b-lg mt-3"
            >
              <p>
                To achieve specific fitness goals, having a structured workout
                program is essential. Gymsurf offers tailored workout programs
                designed to meet individual needs and requirements. These
                programs take into account factors such as fitness level, goals,
                preferences, and any specific limitations or considerations. By
                following a well-designed program, individuals can ensure they
                are engaging in the right exercises, targeting specific muscle
                groups, and progressing at an appropriate pace. With Gymsurf,
                users can access comprehensive workout programs that provide
                guidance, variety, and the flexibility to adapt to their
                evolving fitness journey.
              </p>
            </motion.div>
          )}
          <br />
          <button
            onClick={() => toggleDropdown(4)}
            className="bg-white p-3 rounded-lg text-black block m-auto"
          >
            {dropdownVisible[4] ? "Hide" : "Show"} answer
          </button>
        </ul>

        <ul className="m-10">
          <li className="text-lg font-bold">
            How do I stay motivated? Maintaining motivation throughout your
            fitness journey can be challenging.
          </li>
          {dropdownVisible[5] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className=" bg-white text-black p-2 rounded-b-lg mt-3"
            >
              <p>
                Staying motivated and consistent with your fitness routine can
                be a challenge. It's important to find ways to stay engaged and
                committed to your goals. Whether it's tracking your progress,
                setting achievable targets, or finding support from a community,
                staying motivated is key. It can be helpful to explore different
                workout programs and find one that suits your needs and
                preferences. Don't be afraid to experiment and try new things to
                keep your fitness journey exciting and enjoyable. Remember to
                celebrate your achievements along the way and stay focused on
                your long-term goals.
              </p>
            </motion.div>
          )}
          <br />
          <button
            onClick={() => toggleDropdown(5)}
            className="bg-white p-3 rounded-lg text-black block m-auto"
          >
            {dropdownVisible[5] ? "Hide" : "Show"} answer
          </button>
        </ul>

        <ul className="m-10">
          <li className="text-lg font-bold">
            What about nutrition and supplements? Understanding the role of
            nutrition and supplements in supporting your fitness goals may raise
            questions. You might be curious about the types of foods to consume,
            meal timing, and whether supplements are necessary.
          </li>
          {dropdownVisible[6] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className=" bg-white text-black p-2 rounded-b-lg mt-3"
            >
              <p>
                When it comes to nutrition and supplements, it's important to
                focus on getting enough protein from natural sources like lean
                meats, poultry, fish, eggs, dairy products, legumes, and nuts.
                Supplements like whey protein and creatine can be helpful, but
                they're not necessary if you're already getting sufficient
                protein from your diet. Prioritize quality food choices before
                considering supplements, and consult with a healthcare
                professional if you have specific dietary needs. A pro tip:
                Peanut butter is literal elixir for people who cannot afford
                whey.
              </p>
            </motion.div>
          )}
          <br />
          <button
            onClick={() => toggleDropdown(6)}
            className="bg-white p-3 rounded-lg text-black block m-auto"
          >
            {dropdownVisible[6] ? "Hide" : "Show"} answer
          </button>
        </ul>
      </div>

      <div className="flex  justify-around m-10 gap-3">
        <div className=" mt-20 ">
          <h1 className="text-4xl font-bold text-center flex flex-col-reverse">
            YouTubers.
          </h1>
          <Lottie animationData={youtub} className="block m-auto h-52" />
          <div className="mt-10 font-light text-lg text-left">
            A special mention of a few youtubers who are informative and fun to
            watch
          </div>
          <div className="list">
            <ul className="list-decimal mt-10">
              <h1 className="text-xl font-bold my-2">
                Nutrition and technique focused channel
              </h1>

              <li>
                <a href="">Jeff Nippard :</a>
              </li>
              <li>Jeet Salal :</li>
              <li>Jeremy Either: </li>
              <li>Eugene Teo :</li>
              <li>Davis Diley :</li>
              <li>Noel Deyzel :</li>
              <li>Chris Heria (Mostly for claisthenics) :</li>
              <li>Max Euceda :</li>
              <li>Scott Herman :</li>
              <li>Ryan Humiston :</li>
              <li>Joe Fazer: </li>
            </ul>

            <ul className="list-decimal mt-10">
              <h1 className="text-xl font-bold my-2">Nutrition Focused</h1>

              <li>Andrew Huberman :</li>
              <li>Mario Tomic: </li>
              <li>Muscle For Life :</li>
              <li>Dr Mikhail Lewis: </li>
            </ul>

            <ul className="list-decimal mt-10">
              <h1 className="text-xl font-bold my-2">Vlogs</h1>

              <li>Saket Gokhale :</li>
              <li>David Laid :</li>
              <li>Browney: </li>
              <li>Matt Does Fitness :</li>
              <li>Alex Eubank :</li>
              <li>NotSoFit: </li>
              <li>Will Tennyson :</li>
              <li>Nick Bare (Mostly Marathon content) :</li>
            </ul>

            <ul className="list-decimal mt-10">
              <h1 className="text-xl font-bold my-2">Peak Motivation</h1>

              <li>The Tren Twins :</li>
              <li>Lexx Little :</li>
              <li>DAMO: </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
