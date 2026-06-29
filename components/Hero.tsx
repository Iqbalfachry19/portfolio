"use client";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";
type Props = {
  pageInfo: PageInfo;
};
const Hero = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: [
      `Hi, My Name's ${pageInfo?.name}`,
      "I'm a Freelance Software Engineer",
      "Specialized in Web3 and AI",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden px-4">
      <BackgroundCircles />
      <img
        className="rounded-full relative h-24 w-24 sm:h-32 sm:w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      />
      <div className="z-20 px-4">
        <h2 className="text-xs sm:text-sm uppercase text-gray-500 pb-2 tracking-[10px] sm:tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold px-4 sm:px-10 min-h-[3rem] sm:min-h-[4rem]">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7Ab0A" />
        </h1>
        <div className="pt-4 flex flex-wrap justify-center gap-2 sm:gap-0 sm:block">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
