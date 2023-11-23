import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "..../utils/fetchPageInfo";
import { fetchSocials } from "../u../utils/fetchExperiences";
type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};
const Home = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const socials: Social[] = await fetchSocials();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
