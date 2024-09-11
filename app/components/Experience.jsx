import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Overlay } from "./Overlay";
import { Human } from "./Human";
import CameraController from "./CameraController"; // Import the CameraController

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight />
      <ScrollControls pages={10} damping={0}>
        <Human scale={2} position={[0, -3, 2]} />
        <Overlay />
      </ScrollControls>
      <mesh>
        <meshBasicMaterial />
      </mesh>
      <CameraController /> {/* Add the CameraController component */}
    </>
  );
};
