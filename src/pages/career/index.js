import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "antd";
import { useState } from "react";
import { educationData, experienceData } from "../../data/career";
import Timeline from "./components/Timeline";
const Career = () => {
    const [active, setActive] = useState("experience");
    return (_jsxs("div", { className: "px-5 lg:custom-px relative min-h-80vh", children: [_jsx("div", { children: _jsx("h1", { className: "text-gradient text-40px font-semibold text-center mb-6", children: "Qualifications" }) }), _jsxs("div", { className: "flex justify-center gap-x-4 lg:gap-x-10 text-slate-50 mb-20", children: [_jsx(Button, { className: "bg-transparent border-cyan-500 shadow-lg shadow-cyan-500/50 text-slate-50", onClick: () => setActive("experience"), children: "Work Experience" }), _jsx(Button, { className: "bg-transparent border-pink-500 shadow-lg px-7 shadow-pink-500/50 text-slate-50", onClick: () => setActive("education"), children: "Education" })] }), _jsxs("div", { className: "relative", children: [_jsx(Timeline, { data: active === "experience" ? experienceData : educationData }), _jsx("div", { className: "absolute top-10% right-10% white__gradient w-20% h-30% rounded-full" })] }), _jsx("div", { className: "absolute -top-30 left-0", id: "career" })] }));
};
export default Career;
