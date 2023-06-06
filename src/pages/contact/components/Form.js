import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TextArea from "antd/es/input/TextArea";
import { Button, Input } from "antd";
const Form = () => {
    return (_jsxs("form", { className: "w-full lg:w-60%", children: [_jsx(Input, { id: "fullname", size: "large", placeholder: "Full Name", className: "bg-transparent text-slate-50 placeholder:(text-gray-400 italic text-sm) mb-6" }), _jsx(Input, { id: "email", size: "large", placeholder: "E-mail Address", className: "bg-transparent text-slate-50 placeholder:(text-gray-400 italic text-sm) mb-6" }), _jsx(TextArea, { id: "message", rows: 4, placeholder: "Message", maxLength: 6, className: "bg-transparent text-slate-50 placeholder:(text-gray-400 italic text-sm) mb-6" }), _jsx(Button, { type: "primary", className: "w-full lg:col-span-2", children: "Send" })] }));
};
export default Form;
