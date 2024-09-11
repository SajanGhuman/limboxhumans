import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CameraController = () => {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 10]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = -(clientY / window.innerHeight - 0.5) * 2;
      setCameraPosition([x, y, 10]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(({ camera }) => {
    camera.position.set(...cameraPosition);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  });

  return null; // This component doesn't render anything itself
};

export default CameraController;
