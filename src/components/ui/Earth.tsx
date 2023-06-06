import { useGLTF } from "@react-three/drei";

export default function Model(props: any) {
  const { nodes, materials } = useGLTF("/earth-transformed.glb") as any;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Planet} />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.Clouds}
        scale={1.02}
      />
    </group>
  );
}

useGLTF.preload("/earth-transformed.glb");
