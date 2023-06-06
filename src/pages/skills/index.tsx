import { useEffect, useState } from "react";
import { SkillDataTypes } from "../../data/techsData";
import { motion } from "framer-motion";
import { textVariants } from "../../utils/motion";
import skillData from "../../data/techsData";
import Ball from "./components/Ball";
// import StarParticles from "../../components/ui/Particles";
import StarsCanvas from "../../components/ui/Stars";

const Skills = () => {
  const [headingIntersected, setHeadingIntersected] = useState(false);

  useEffect(() => {
    const headingElement = document.querySelector(
      "#skills-heading"
    ) as HTMLElement;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingIntersected(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(headingElement);
  }, []);

  return (
    <div className="relative text-dimWhite min-h-80vh px-5 mt-10 mb-80px lg:(mt-0px px-100px)">
      <motion.h1
        id="skills-heading"
        className="text-gradient text-40px font-semibold text-center mb-40px"
        variants={textVariants(0)}
        initial="hidden"
        animate="show"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-col justify-center gap-x-10 md:(flex-row gap-x-30) relative">
        {skillData?.map((skill: SkillDataTypes) => {
          return (
            <motion.div key={skill.id} className="rounded-xl p-3">
              <h1
                className={`text-slate-50 shadow-lg mx-auto mb-12 w-fit rounded-lg px-4 py-2 ${
                  skill.id === 1 ? "shadow-pink-500/50" : "shadow-cyan-500/50"
                }`}
              >
                {skill.heading}
              </h1>
              <div className="grid grid-cols-3 gap-10 place-items-center lg:(grid-cols-5 gap-10)">
                {headingIntersected
                  ? skill.children.map((child) => (
                      <Ball child={child} skillId={skill.id} />
                    ))
                  : null}
              </div>
            </motion.div>
          );
        })}

        <StarsCanvas />
        {/* gradients */}
        <div className="absolute top-40% right-14% blue__gradient w-40% h-30% rounded-full" />
        <div className="absolute top-40% left-20% pink__gradient w-20% h-30% rounded-full" />
        <div id="skills" className="absolute -top-27% left-0" />
      </div>
    </div>
  );
};

export default Skills;
