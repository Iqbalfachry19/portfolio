import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';
type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden opacity-40 mt-10 h-[500px] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[800px] snap-center bg-[#292929] p-10">
      <motion.img
        initial={{
          y: -80,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        className="w-16 h-16 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-lg mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2 text-md">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology.image).url()}
              className="h-8 w-8 rounded-full"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{' '}
          {experience.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 pr-5 text-lg max-h-80 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
