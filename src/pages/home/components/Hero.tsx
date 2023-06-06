import { motion as m } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
import SocialMedia from "./SocialMedia";
import Terminal from "./Terminal";

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariant = {
  hidden: { y: "100%" },
  show: {
    y: "0%",
    transition: { duration: 0.8 },
  },
};

const Hero = () => {
  return (
    <div className="flex items-center px-5 pt-24 min-h-[calc(100vh-90px)] md:px-100px lg:(min-h-[calc(100vh-78.4px)] justify-between flex-row)">
      <m.div
        variants={containerVariant}
        initial="hidden"
        animate="show"
        className="w-full lg:w-1/2 text-dimWhite relative"
      >
        <div className="mb-3 lg:mb-1 -translate-x-1 lg:-translate-x-3">
          <m.div
            variants={itemVariant}
            className="text-50px lg:text-70px lg:leading-20"
          >
            <span className="text-gradient">Tunar </span>Alyarzada
          </m.div>
        </div>

        <div className="mb-2">
          <m.div variants={itemVariant} className="text-22px lg:text-27px">
            Fullstack <span className="text-gradient"> Next js</span> Engineer
          </m.div>
        </div>

        <SocialMedia />

        <div className="mb-6 leading-5 font-light italic">
          <m.p variants={itemVariant}>
            Hey there, Welcome to my personal portfolio website! I'm Fullstack
            Nextjs developer with about 3 years of experience based in Baku
            /Azerbaijan!
          </m.p>
        </div>

        <div className="flex gap-x-2">
          <m.a
            variants={fadeIn("right", "tween", 0.2, 0.8)}
            href="#contact"
            type="button"
            className="bg-blue-gradient border-none rounded-6px py-2 px-4 text-slate-950 font-medium"
          >
            Contact me
          </m.a>
          <m.a
            variants={fadeIn("left", "tween", 0.4, 0.8)}
            type="button"
            className="bg-transparent border border-solid border-white rounded-6px py-2 px-4 text-slate-50 font-medium"
            href="../../assets/pdf/Full Stack Developer (FE-heavy) (1).pdf"
            download="Full Stack Developer (FE-heavy) (1).pdf"
          >
            Download CV
          </m.a>
        </div>

        <div className="blue__gradient w-40% h-200px absolute -bottom-50 -left-50 rounded-full" />
      </m.div>

      <Terminal />
    </div>
  );
};

export default Hero;
