import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
const Footer = () => {
    return (_jsxs("div", { className: "text-white shadow-lg shadow-cyan-500/50 p-6 bg-transparent", children: [_jsx("p", { children: "Created by @tunaralyarzada" }), _jsx("div", { className: "mt-3 block lg:hidden", children: _jsxs("ul", { className: "flex flex-col gap-y-2 lg:gap-y-4", children: [_jsxs("li", { className: "flex gap-x-4 text-14px", children: [_jsx(MdLocationOn, { className: "text-16px lg:-translate-x-2px" }), _jsx("p", { className: "-translate-x-3px", children: "Baku / Azerbaijan" })] }), _jsxs("li", { className: "flex gap-x-4 text-14px", children: [_jsx(BsFillTelephoneFill, { className: "text-13px" }), _jsx("p", { children: "055 664-30-64 / 050 611-33-15" })] }), _jsxs("li", { className: "flex gap-x-4 text-14px", children: [_jsx(SiGmail, { className: "text-13px" }), _jsx("p", { children: "tunar.alyarzada.98@gmail.com" })] })] }) })] }));
};
export default Footer;
