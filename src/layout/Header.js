import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { motion as m } from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { headerData } from "../data/headerData";
import logo from "../assets/logo-no-background.svg";
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
const Navbar = ({ expand }) => {
    const [active, setActive] = useState(1);
    const { matches } = useMediaQuery("992");
    return (_jsx(m.div, { className: "absolute top-18 left-0 w-full py-6 bg-primary rounded-lg shadow-lg shadow-cyan-500/50 lg:(static w-auto bg-transparent shadow-transparent)", variants: matches ? {} : navVariant, initial: matches ? "" : "hidden", animate: expand ? "visible" : "hidden", children: _jsx("ul", { className: "flex items-center justify-center gap-5 rounded-lg flex-col lg:flex-row", children: headerData.map((data) => (_jsx("li", { onClick: () => {
                    setActive(data.id);
                }, children: _jsx("a", { className: active === data.id ? "text-cyan-500" : "text-slate-50", href: `#${data.link}`, children: data.title }) }, data.id))) }) }));
};
const Header = () => {
    const [expand, setExpand] = useState(false);
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20);
        });
    }, []);
    return (_jsx(m.header, { className: `w-full fixed top-0 left-0 z-200 ${scroll ? "shadow-lg shadow-slate-50/20 backdrop-blur-lg" : "shadow-none"}`, children: _jsxs("nav", { className: "w-90% py-5 lg:py-0 mx-auto relative flex justify-between items-center", children: [_jsx("div", { onClick: () => window.scrollTo(0, 0), children: _jsx("img", { className: "h-16px", src: logo, alt: "logo" }) }), _jsx("div", { className: "z-50 text-slate-50 block lg:hidden", onClick: () => setExpand((prev) => !prev), children: _jsx(BiMenuAltRight, { className: "text-26px" }) }), _jsx(Navbar, { expand: expand })] }) }));
};
export default Header;
