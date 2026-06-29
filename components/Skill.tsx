"use client";

import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

const Skill = ({ directionLeft = false, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer overflow-hidden">
      <motion.img
        src={urlFor(skill.image).url()}
        alt={skill.title}
        loading="lazy"
        initial={{
          x: directionLeft ? -60 : 60,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
        }}
        className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white opacity-0 group-hover:opacity-80 transition duration-300">
        <p className="text-sm md:text-base xl:text-lg font-bold text-black">
          {skill.progress}%
        </p>
      </div>
    </div>
  );
};

export default Skill;
