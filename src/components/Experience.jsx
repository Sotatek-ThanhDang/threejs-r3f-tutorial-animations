import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React from "react";
import Woman from "./Woman";

const Experience = () => {
  const gl = useThree((state) => state.gl);
  React.useEffect(() => {
    setTimeout(() => {
      const a = () => {
        console.warn("=====", gl);
        const link = document.createElement("a");
        link.setAttribute("download", "canvas.png");
        link.setAttribute(
          "href",
          gl.domElement
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream")
        );
        link.click();
      };
      a();
    }, 30000);
  }, []);

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <group position={[0, -1, 0]}>
        <Woman />
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};

export default Experience;
