import { motion as m } from "framer-motion";

const variant = {
  hidden: {
    x: 0,
    y: 0,
  },
  visible: {
    x: [5, -5, 5],
    y: [-5, 5, -5],
    transition: {
      repeat: Infinity,
      ease: "easeInOut",
      duration: 3,
    },
  },
};

const variant2 = {
  hidden: {
    x: 0,
    y: 0,
  },
  visible: {
    x: [-5, 5, -5],
    y: [5, -5, 5],
    transition: {
      repeat: Infinity,
      ease: "easeInOut",
      duration: 3,
    },
  },
};

const Ball = ({ child }: any) => {
  function isEven(num: number) {
    return num % 2 === 0;
  }

  return (
    <m.div
      variants={isEven(child.id) ? variant : variant2}
      initial="hidden"
      whileInView="visible"
      title={child.title}
      className="w-60px h-60px"
    >
      <img className="w-full h-full mb-3" src={child.icon} alt={child.title} />
    </m.div>
  );
};

export default Ball;
