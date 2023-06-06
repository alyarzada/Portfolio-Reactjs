import { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { motion as m } from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { headerData } from "../data/headerData";
import logo from "../assets/logo-no-background.svg";

interface NavbarProps {
  expand: boolean;
}

const navVariant = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.4,
    },
  },
};

const Navbar = ({ expand }: NavbarProps) => {
  const [active, setActive] = useState<number>(1);
  const { matches } = useMediaQuery("992");

  return (
    <m.div
      className="absolute top-18 left-0 w-full py-6 bg-primary rounded-lg shadow-lg shadow-cyan-500/50 lg:(static w-auto bg-transparent shadow-transparent)"
      variants={matches ? {} : navVariant}
      initial={matches ? "" : "hidden"}
      animate={expand ? "visible" : "hidden"}
    >
      <ul className="flex items-center justify-center gap-5 rounded-lg flex-col lg:flex-row">
        {headerData.map((data) => (
          <li
            key={data.id}
            onClick={() => {
              setActive(data.id);
            }}
          >
            <a
              className={active === data.id ? "text-cyan-500" : "text-slate-50"}
              href={`#${data.link}`}
            >
              {data.title}
            </a>
          </li>
        ))}
      </ul>
    </m.div>
  );
};

const Header = () => {
  const [expand, setExpand] = useState<boolean>(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <m.header
      className={`w-full fixed top-0 left-0 z-200 ${
        scroll ? "shadow-lg shadow-slate-50/20 backdrop-blur-lg" : "shadow-none"
      }`}
    >
      <nav className="w-90% py-5 lg:py-0 mx-auto relative flex justify-between items-center">
        <div onClick={() => window.scrollTo(0, 0)}>
          <img className="h-16px" src={logo} alt="logo" />
        </div>

        <div
          className="z-50 text-slate-50 block lg:hidden"
          onClick={() => setExpand((prev) => !prev)}
        >
          <BiMenuAltRight className="text-26px" />
        </div>

        <Navbar expand={expand} />
      </nav>
    </m.header>
  );
};

export default Header;
