"use client";
import { motion } from "framer-motion";
type Props = {};
function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center top-24"
    >
      <div className="absolute border border-[#333333] rounded-full h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] mt-52 animate-ping" />
      <div className="border border-[#333333] rounded-full h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] mt-52 absolute" />
      <div className="border border-[#333333] rounded-full h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] mt-52 absolute" />
      <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[380px] w-[380px] sm:h-[550px] sm:w-[550px] absolute mt-52 animate-pulse" />
      <div className="border border-[#333333] rounded-full h-[500px] w-[500px] sm:h-[700px] sm:w-[700px] mt-52 absolute" />
    </motion.div>
  );
}
export default BackgroundCircles;
