"use client";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  projects: Project[];
};
const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-4 items-center justify-center px-6 sm:px-20 md:px-44 pt-24 pb-10 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-[280px] sm:max-w-md max-h-52 sm:max-h-72 md:max-h-80 object-contain rounded-lg"
              src={urlFor(project?.image).url()}
              alt=""
            />

            <div className="space-y-4 sm:space-y-6 px-0 md:px-10 max-w-3xl w-full">
              <h4 className="text-xl sm:text-3xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex flex-wrap items-center gap-2 justify-center">
                {project?.technologies?.map((technology) => (
                  <img
                    className="h-7 w-7 sm:h-10 sm:w-10"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                  />
                ))}
              </div>

              <p className="text-sm sm:text-base md:text-lg text-center md:text-left leading-relaxed line-clamp-4 sm:line-clamp-none">
                {project?.summary}
              </p>

              {project?.linkToBuild && (
                <div className="flex justify-center mt-4">
                  <a
                    href={project.linkToBuild}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-[#F7AB0A] text-black font-semibold text-sm sm:text-base hover:bg-[#f8b92e] transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
};
export default Projects;
