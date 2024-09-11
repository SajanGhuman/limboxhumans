'use client'
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

export default function Home() {
  return (
    <main className="h-screen min-h-screen relative">
      <Canvas fallback={<div>Sorry no WebGL supported!</div>}>
        <Experience />
      </Canvas>
    </main>
  );
}
