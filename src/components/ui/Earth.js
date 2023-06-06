import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useGLTF } from "@react-three/drei";
export default function Model(props) {
    const { nodes, materials } = useGLTF("/earth-transformed.glb");
    return (_jsxs("group", { ...props, dispose: null, children: [_jsx("mesh", { geometry: nodes.Object_4.geometry, material: materials.Planet }), _jsx("mesh", { geometry: nodes.Object_6.geometry, material: materials.Clouds, scale: 1.02 })] }));
}
useGLTF.preload("/earth-transformed.glb");
