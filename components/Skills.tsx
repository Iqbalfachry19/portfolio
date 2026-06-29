"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";
type Props = {
  skills: SkillType[];
};
const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col items-center justify-center min-h-screen max-w-[2000px] mx-auto px-6 sm:px-10 xl:px-10 py-20"
    >
      <div className="text-center mb-8 sm:mb-12">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl">
          Skills
        </h3>
        <p className="mt-4 uppercase tracking-[3px] text-gray-500 text-xs sm:text-sm">
          Hover over a skill for current proficiency
        </p>
      </div>

      {/* Mobile: 4 cols small icons | md+: same but bigger icons via Skill component */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 sm:gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
};
export default Skills;
