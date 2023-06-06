import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TypeAnimation } from "react-type-animation";
const containerStyle = {
    perspective: "1000px",
};
const boxStyle = {
    background: "#ccc",
    transform: "rotateY(-20deg)",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.2)",
};
const rowNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const jsxCode = `
import React, {useState, useEffect} from 'react'

const Hero = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(prev => !prev)
    }, [])

  return (
    <h1>Hello World</h1>
  )
}

export default Hero
`;
const Terminal = () => {
    return (_jsx("div", { style: containerStyle, className: "w-[38%]", children: _jsxs("div", { style: boxStyle, className: "rounded-lg hidden lg:block relative", children: [_jsx("div", { className: "flex justify-start bg-gray-gradient rounded-t px-3 py-2", children: _jsxs("div", { className: "flex gap-x-2", children: [_jsx("span", { className: "bg-red-400 block rounded-full w-12px h-12px" }), _jsx("span", { className: "bg-yellow-400 block rounded-full w-12px h-12px" }), _jsx("span", { className: "bg-green-400 block rounded-full w-12px h-12px" })] }) }), _jsxs("div", { className: "text-slate-50 z-100 relative bg-gray-950 rounded-b flex gap-x-3 p-3", children: [_jsx("div", { className: "flex flex-col gap-y-2", children: rowNumbers.map((number, index) => (_jsx("span", { className: "text-slate-400", children: number }, index))) }), _jsx("div", { className: "whitespace-pre-wrap", children: _jsx(TypeAnimation, { sequence: [jsxCode, 1000], speed: 75, style: {
                                    fontSize: "16px",
                                    fontStyle: "italic",
                                    lineHeight: "20px",
                                }, repeat: Infinity }) })] }), _jsx("div", { className: "pink__gradient w-1/2 h-200px absolute -top-20 left-0 rounded-full" })] }) }));
};
export default Terminal;
