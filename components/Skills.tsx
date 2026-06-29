"use client";

import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  const half = Math.ceil(skills.length / 2);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto px-6 py-20"
    >
      <div className="text-center mb-10">
        <h3 className="uppercase tracking-[12px] sm:tracking-[18px] text-gray-500 text-xl sm:text-2xl">
          Skills
        </h3>

        <p className="mt-4 uppercase tracking-[2px] text-gray-500 text-xs sm:text-sm">
          Hover over a skill for current proficiency
        </p>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 sm:gap-5">
        {skills.slice(0, half).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills.slice(half).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
