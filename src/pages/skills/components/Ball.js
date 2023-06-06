import { jsx as _jsx } from "react/jsx-runtime";
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
const Ball = ({ child }) => {
    function isEven(num) {
        return num % 2 === 0;
    }
    return (_jsx(m.div, { variants: isEven(child.id) ? variant : variant2, initial: "hidden", whileInView: "visible", title: child.title, className: "w-60px h-60px", children: _jsx("img", { className: "w-full h-full mb-3", src: child.icon, alt: child.title }) }));
};
export default Ball;
