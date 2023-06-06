import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "./Header";
import "@unocss/reset/eric-meyer.css";
import "virtual:uno.css";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const Root = () => {
    return (_jsxs("div", { className: "min-h-screen bg-primary font-main", children: [_jsx(Header, {}), _jsx("div", { children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
};
export default Root;
