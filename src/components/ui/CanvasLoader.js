import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Html, useProgress } from "@react-three/drei";
const CanvasLoader = () => {
    const { progress } = useProgress();
    return (_jsxs(Html, { as: "div", center: true, style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }, children: [_jsx("span", { className: "canvas-loader" }), _jsxs("p", { style: {
                    fontSize: 14,
                    color: "#F1F1F1",
                    fontWeight: 800,
                    marginTop: 40,
                }, children: [progress.toFixed(2), "%"] })] }));
};
export default CanvasLoader;
