import { motion as m } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { Button } from "antd";
import myphoto from "../../assets/Screenshot (238).png";

const About = () => {
  return (
    <div className="flex flex-col justify-between min-h-60vh px-5 mt-20 relative md:(px-100px justify-center flex-row gap-x-10 mt-40)">
      <div className="w-full md:w-50% lg:w-1/3 relative z-5 mb-10 lg:(mb-0)">
        <div className="relative z-10">
          <m.img
            initial={{ rotate: 0 }}
            whileInView={{
              rotate: 6,
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            viewport={{ once: true, amount: 0.5 }}
            src={myphoto}
            className="w-full h-300px object-cover shadow-lg rounded-lg relative shadow-cyan-500/50 lg:(w-300px h-300px)"
            alt="photo"
          />
        </div>
        <div className="absolute z-5 top-0 left-0 w-full h-300px bg-cyan-500/50 rounded-lg lg:(w-300px h-300px)" />
      </div>

      <m.div
        className="text-dimWhite w-full lg:w-40% relative"
        variants={fadeIn("left", "tween", 0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-gradient text-40px mb-10px">About me</h1>
        <p className="leading-22px mb-4 text-justify italic">
          It has been around 3 years since I started developing myself in the
          field of front-end, and I have gained sufficient theoretical and
          practical knowledge. As someone who is very enthusiastic about
          learning new things, I have learned the latest and modern technologies
          in this field and added them to my skills. Over these years, in
          addition to small and medium-sized projects, I have developed more
          complex internal management systems with structured and rich content,
          such as "dashboards" (along with API), and gained extensive experience
          in front-end. In addition to this, I have been learning and have
          reached a certain level of proficiency in the technologies related to
          back-end.
        </p>
        <Button className="bg-blue-gradient border-none w-full lg:w-auto">
          My projects
        </Button>
        <div className="white__gradient rounded-full absolute bottom-20 right-0 w-30% h-30%" />
      </m.div>
      <div className="absolute -top-50 left-0" id="about" />
    </div>
  );
};

export default About;
