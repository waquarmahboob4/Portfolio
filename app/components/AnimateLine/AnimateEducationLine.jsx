"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "../LiIcon/LiIcon";

const Details = ({ type, place, info, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};
const AnimateEducationLine = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]"
      />
      <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
          type="BACHELOR OF SCIENCE IN COMPUTER APPLICATION"
          time="2018-2021"
          place="ALIGARH MUSLIM UNIVERSITY"
          info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence."
        />
        <Details
          type="MASTER IN COMPUTER SCIENCE AND APPLICATION"
          time="2021-2023"
          place="ALIGARH MUSLIM UNIVERSITY"
          info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence."
        />
      </ul>
    </div>
  );
};

export default AnimateEducationLine;
