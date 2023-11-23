"use client";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -140 : 140,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-12 h-12 xl:w-16 xl:h-16 filter group-hover:grayscale transition duration-300 ease-in-out md:w-14 md:h-14"
      />
      <div className="z-0 rounded-full absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:w-14 md:h-14 xl:w-16 xl:h-16">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
