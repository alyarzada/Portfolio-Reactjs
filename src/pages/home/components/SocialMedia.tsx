import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { motion as m } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const linkVariant = {
  hidden: { y: -15 },
  show: {
    y: 0,
    transition: { duration: 0.8 },
  },
};
const SocialMedia = () => {
  return (
    <m.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      className="flex gap-x-3 mb-6 mt-3 text-slate-50"
    >
      <m.a
        variants={linkVariant}
        href="https://www.instagram.com/tunaralyarzada/"
        target="_blank"
        className="text-gray-200"
      >
        <AiOutlineInstagram />
      </m.a>
      <m.a
        variants={linkVariant}
        href="https://www.facebook.com/tunaralyarzada/"
        target="_blank"
        className="text-gray-200"
      >
        <AiOutlineGithub />
      </m.a>
      <m.a
        variants={linkVariant}
        href="https://github.com/alyarzada"
        className="text-gray-200"
        target="_blank"
      >
        <IoLogoFacebook />
      </m.a>
    </m.div>
  );
};

export default SocialMedia;
