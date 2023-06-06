import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";
const Stars = (props) => {
    const ref = useRef();
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    useFrame((_, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });
    return (_jsx("group", { rotation: [0, 0, Math.PI / 4], children: _jsx(Points, { ref: ref, positions: sphere, stride: 3, frustumCulled: true, ...props, children: _jsx(PointMaterial, { transparent: true, color: "#f272c8", size: 0.002, sizeAttenuation: true, depthWrite: false }) }) }));
};
const StarsCanvas = () => {
    return (_jsx("div", { className: "w-full h-auto absolute inset-0 ", children: _jsxs(Canvas, { camera: { position: [0, 0, 1] }, children: [_jsx(Suspense, { fallback: null, children: _jsx(Stars, {}) }), _jsx(Preload, { all: true })] }) }));
};
export default StarsCanvas;
