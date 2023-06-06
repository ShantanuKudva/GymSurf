import React, { useState, useRef } from "react";
import Lottie from "lottie-react";
import contact from "../assets/Logo rotating.json";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    e.preventDefault();

    emailjs
      .sendForm(
        "service_63z36lp",
        "template_fhdnklk",
        form.current,
        "_f7JgfRj_T9Bl7uum"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("email sent!");
        },
        (error) => {
          alert(error.text);
        }
      );
    console.log(username, email, message);
    setEmail("");
    setMessage("");
    setUsername("");
  }

  const form = useRef();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ transition: { duration: 0.5 } }}
    >
      <form
        ref={form}
        className="grid grid-cols-2 gap-3 mt-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your name"
          className="p-5 bg-black border rounded-lg border-white"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your mail"
          className="p-5 bg-black border rounded-lg border-white"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <textarea
          placeholder="a word of appreciation maybe?"
          name="message"
          className="p-5 bg-black border rounded-lg border-white col-span-full"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button type="submit" className="text-2xl relative ">
          <h1 className="font-extralight absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-m mt-10 border border-white p-2 rounded-lg">
            Send!
          </h1>
        </button>
      </form>
    </motion.div>
  );
}

export default Contact;
