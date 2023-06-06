import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion as m } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import frontend from "../../assets/about/graphic-design.png";
import backend from "../../assets/about/cloud-storage.png";
import fullstack from "../../assets/about/programming.png";
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
    hidden: { x: -20, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6 },
    },
};
const services = [
    {
        icon: frontend,
        title: "Front End Development",
    },
    {
        icon: fullstack,
        title: "Full Stack Development",
    },
    {
        icon: backend,
        title: "Back End Development",
    },
];
const Services = () => {
    const { matches } = useMediaQuery("992");
    return (_jsxs(m.div, { variants: containerVariant, initial: "hidden", whileInView: "show", viewport: { once: true, amount: matches ? 1 : 0.2 }, className: "grid place-items-center gap-7 px-5 grid-cols-1 sm:grid-cols-2 md:(grid-cols-3 px-100px) lg:(w-auto gap-y-12 mt-10)", children: [services.map((service, index) => (_jsx(Tilt, { children: _jsxs(m.div, { variants: itemVariant, className: "shadow-lg shadow-cyan-500/50 text-center translate-y-16 rounded-lg px-20 py-8 bg-gray-gradient flex flex-col gap-y-3 justify-center items-center text-slate-50 lg:(px-10)", children: [_jsx("img", { className: "w-50px", src: service.icon, alt: service.title }), _jsx("h1", { className: "text-16px leading-5", children: service.title })] }) }, index))), _jsx("div", { className: "absolute top-50% -left-80% pink__gradient w-50% h-50% rounded-full" })] }));
};
export default Services;
