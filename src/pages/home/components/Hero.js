import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "flex items-center px-5 pt-24 min-h-[calc(100vh-90px)] md:px-100px lg:(min-h-[calc(100vh-78.4px)] justify-between flex-row)", children: [_jsxs(m.div, { variants: containerVariant, initial: "hidden", animate: "show", className: "w-full lg:w-1/2 text-dimWhite relative", children: [_jsx("div", { className: "mb-3 lg:mb-1 -translate-x-1 lg:-translate-x-3", children: _jsxs(m.div, { variants: itemVariant, className: "text-50px lg:text-70px lg:leading-20", children: [_jsx("span", { className: "text-gradient", children: "Tunar " }), "Alyarzada"] }) }), _jsx("div", { className: "mb-2", children: _jsxs(m.div, { variants: itemVariant, className: "text-22px lg:text-27px", children: ["Fullstack ", _jsx("span", { className: "text-gradient", children: " Next js" }), " Engineer"] }) }), _jsx(SocialMedia, {}), _jsx("div", { className: "mb-6 leading-5 font-light italic", children: _jsx(m.p, { variants: itemVariant, children: "Hey there, Welcome to my personal portfolio website! I'm Fullstack Nextjs developer with about 3 years of experience based in Baku /Azerbaijan!" }) }), _jsxs("div", { className: "flex gap-x-2", children: [_jsx(m.a, { variants: fadeIn("right", "tween", 0.2, 0.8), href: "#contact", type: "button", className: "bg-blue-gradient border-none rounded-6px py-2 px-4 text-slate-950 font-medium", children: "Contact me" }), _jsx(m.a, { variants: fadeIn("left", "tween", 0.4, 0.8), type: "button", className: "bg-transparent border border-solid border-white rounded-6px py-2 px-4 text-slate-50 font-medium", href: "../../assets/pdf/Full Stack Developer (FE-heavy) (1).pdf", download: "Full Stack Developer (FE-heavy) (1).pdf", children: "Download CV" })] }), _jsx("div", { className: "blue__gradient w-40% h-200px absolute -bottom-50 -left-50 rounded-full" })] }), _jsx(Terminal, {})] }));
};
export default Hero;
