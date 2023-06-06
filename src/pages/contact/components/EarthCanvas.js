import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import Earth from "../../../components/ui/Earth";
function ErrorBoundary(props) {
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        if (props.error) {
            setHasError(true);
        }
    }, [props.error]);
    if (hasError)
        return _jsx("div", { children: "Something went wrong." });
    return props.children;
}
const EarthCanvas = () => {
    const [error, setError] = useState(null);
    function handleError(error) {
        setError(error);
    }
    return (_jsx(ErrorBoundary, { error: error, children: _jsx(Canvas, { shadows: true, frameloop: "demand", dpr: [1, 2], gl: { preserveDrawingBuffer: true }, camera: {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }, onError: handleError, children: _jsxs(Suspense, { fallback: null, children: [_jsx(OrbitControls, { autoRotate: true, enableZoom: false }), _jsx(Stage, { environment: "night", intensity: 0.6, children: _jsx(Earth, {}) })] }) }) }));
};
export default EarthCanvas;
// import CanvasLoader from "../../../components/ui/CanvasLoader";
{
    /* <Preload all /> */
}
