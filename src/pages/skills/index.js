import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { textVariants } from "../../utils/motion";
import skillData from "../../data/techsData";
import Ball from "./components/Ball";
// import StarParticles from "../../components/ui/Particles";
import StarsCanvas from "../../components/ui/Stars";
const Skills = () => {
    const [headingIntersected, setHeadingIntersected] = useState(false);
    useEffect(() => {
        const headingElement = document.querySelector("#skills-heading");
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setHeadingIntersected(true);
            }
        }, { threshold: 0.5 });
        observer.observe(headingElement);
    }, []);
    return (_jsxs("div", { className: "relative text-dimWhite min-h-80vh px-5 mt-10 mb-80px lg:(mt-0px px-100px)", children: [_jsx(motion.h1, { id: "skills-heading", className: "text-gradient text-40px font-semibold text-center mb-40px", variants: textVariants(0), initial: "hidden", animate: "show", children: "Technologies" }), _jsxs("div", { className: "flex flex-col justify-center gap-x-10 md:(flex-row gap-x-30) relative", children: [skillData?.map((skill) => {
                        return (_jsxs(motion.div, { className: "rounded-xl p-3", children: [_jsx("h1", { className: `text-slate-50 shadow-lg mx-auto mb-12 w-fit rounded-lg px-4 py-2 ${skill.id === 1 ? "shadow-pink-500/50" : "shadow-cyan-500/50"}`, children: skill.heading }), _jsx("div", { className: "grid grid-cols-3 gap-10 place-items-center lg:(grid-cols-5 gap-10)", children: headingIntersected
                                        ? skill.children.map((child) => (_jsx(Ball, { child: child, skillId: skill.id })))
                                        : null })] }, skill.id));
                    }), _jsx(StarsCanvas, {}), _jsx("div", { className: "absolute top-40% right-14% blue__gradient w-40% h-30% rounded-full" }), _jsx("div", { className: "absolute top-40% left-20% pink__gradient w-20% h-30% rounded-full" }), _jsx("div", { id: "skills", className: "absolute -top-27% left-0" })] })] }));
};
export default Skills;
