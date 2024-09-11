import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export const FLOOR_HEIGHT = 10;
export const NB_FLOORS = 3;

export function Human(props) {
  const ref = useRef();
  const tl = useRef();
  const t2 = useRef();

  const { nodes, materials, animations } = useGLTF("/floating_2.glb");
  const { actions } = useAnimations(animations, ref);
  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
    t2.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    if (actions && animations.length > 0) {
      const firstAnimationAction = actions[Object.keys(actions)[0]];
      firstAnimationAction.play();
    }

    tl.current = gsap.timeline();
    t2.current = gsap.timeline();

    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: 10,
      },
      0,
    );
    t2.current.to(
      ref.current.position,
      {
        duration: 2,
        z: 30,
      },
      0,
    );
  }, [actions, animations]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[2.911, 0, 0]}>
          <group name="54c8563d4e164c2c835035048678351bobjcleanermaterialmergergle" />
        </group>
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Object_2"
            geometry={nodes.Object_2.geometry}
            material={materials["material_0.002"]}
            skeleton={nodes.Object_2.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/floating_2.glb");
