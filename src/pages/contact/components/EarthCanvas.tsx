import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import Earth from "../../../components/ui/Earth";

function ErrorBoundary(props: any) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (props.error) {
      setHasError(true);
    }
  }, [props.error]);

  if (hasError) return <div>Something went wrong.</div>;

  return props.children;
}

const EarthCanvas = () => {
  const [error, setError] = useState(null);

  function handleError(error: any) {
    setError(error);
  }

  return (
    <ErrorBoundary error={error}>
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
        onError={handleError}
      >
        <Suspense fallback={null}>
          <OrbitControls autoRotate enableZoom={false} />
          <Stage environment="night" intensity={0.6}>
            <Earth />
          </Stage>
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
};

export default EarthCanvas;

// import CanvasLoader from "../../../components/ui/CanvasLoader";

{
  /* <Preload all /> */
}
