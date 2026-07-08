import React from "react";
import { motion } from "framer-motion";
import "./Loading.css";
// import logo from "./public/logo.png";

const letters = [
  "I",
  "N",
  "F",
  "I",
  "N",
  "I",
  "T",
  "Y",
  " ",
  "S",
  "P",
  "A",
  "C",
  "E",
];

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        {/* Logo */}

        {/* <motion.img
          src={logo}
          alt="Infinity Space"
          className="mb-10 w-32 sm:w-40 lg:w-48"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        /> */}

        {/* Loading Text */}

        <div className="loader">
          {letters.map((letter, index) => {
            if (letter === " ") {
              return (
                <span
                  key={index}
                  className="inline-block"
                  style={{ width: "30px" }}
                />
              );
            }

            return (
              <span
                key={index}
                className={`loader-letter ${
                  index % 2 === 0 ? "text-[#01653F]" : "text-black"
                }`}
                style={{
                  animationDelay: `${index * 0.12}s`,
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
